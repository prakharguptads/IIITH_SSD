import React, { useEffect, useState } from "react";
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "./App.css";
function Tas() {
    const [query, setQuery] = useState([{
        exam_name: '',
        course_name: '',
        question_num: '',
        ta_comment: ''
    }])
    useEffect(() => {
        fetch("http://localhost:5000/getquery/").then(res => {
            if (res.ok) {
                console.log(res);
                return res.json()
            }
        }).then(jsonRes => setQuery(jsonRes));
    })
    const [qres, setqres] = useState("");
    const handleChange2 = (event) => {
        setqres(event.target.value)
    }
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        console.log(qres);
        // const configuration = {
        //     method: "post",
        //     url: "http://localhost:5000/update/",
        //     data: {
        //         query.
        //         query.course_name,
        //         query.question_num,
        //         query.std_comment,
        //         query.ta_roll,
        //         query.ta_comment
        //     },
        // };

        // // make the API call
        // axios(configuration)
        //     .then((result) => {
        //         setQuerydone(true);
        //     })
        //     .catch((error) => {
        //         error = new Error();
        //     });
    };
    return (
        <div className="">
            <div className="title">
                Student's Concern(For TAs)
                <div>
                    {query.map(q => q.ta_comment != null ?
                        <div className="container">
                            <Card>
                                <CardBody>
                                    <CardTitle className="title-color">Exam Name: {q.exam_name}</CardTitle>
                                    <CardText className="text">Course Name: {q.course_name}</CardText>
                                    <CardText className="text">Question No: {q.question_num}</CardText>
                                    Query: <Card><CardText className="text">{q.std_comment}</CardText></Card>
                                    Response: <Card><CardText className="text">{q.ta_comment}</CardText></Card>
                                </CardBody>
                            </Card>
                        </div> : <div className="container">
                            <Card>
                                <CardBody>
                                    <CardTitle className="title-color">Exam Name: {q.exam_name}</CardTitle>
                                    <CardText className="text">Course Name: {q.course_name}</CardText>
                                    <CardText className="text">Question No: {q.question_num}</CardText>
                                    <Card><CardText className="text">Query: {q.std_comment}</CardText></Card>
                                    Response : <textarea onChange={handleChange2}></textarea>
                                    <input type="submit" value={"Post"} onClick={(e) => handleSubmit(e)} />

                                </CardBody>
                            </Card>
                        </div>)}
                </div>
            </div>
        </div>
    );
};
export default Tas;