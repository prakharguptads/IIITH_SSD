import React, { useEffect, useState } from "react";
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "./App.css";
function Students() {
    const [query, setQuery] = useState([{
        exam_name: '',
        course_name: '',
        question_num: '',
        std_comment: ''
    }])

    useEffect(() => {
        fetch("http://localhost:5000/getquery/").then(res => {
            if (res.ok) {
                console.log(res);
                return res.json()
            }
        }).then(jsonRes => setQuery(jsonRes));
    });


    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        );
    };

    return (
        <div>
            <div className="title">Feedbacks <a className="btn" href="/query">Add Query</a></div>
            <div>
                {query.map(q =>
                    <div className="container">
                        <Card>
                            <CardBody>
                                <CardTitle className="title-color">Exam Name: {q.exam_name}</CardTitle>
                                <CardText className="text">Course Name: {q.course_name}</CardText>
                                <CardText className="text">Question No: {q.question_num}</CardText>
                                Query :<Card><CardTitle className="col-sm"><ReadMore>{q.std_comment}
                                </ReadMore></CardTitle></Card>
                                Response :<Card><CardTitle className="col-sm"><ReadMore>{q.std_comment}
                                </ReadMore></CardTitle></Card>
                            </CardBody>
                        </Card>
                    </div>)}
            </div>
        </div >
    );
};
export default Students;