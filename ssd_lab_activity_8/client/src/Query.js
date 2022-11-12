import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [ta_roll, setta_roll] = useState("");
    const [exam_name, setexam_name] = useState("");
    const [course_name, setcourse_name] = useState("");
    const [question_num, setquestion_num] = useState("");
    const [std_comment, setstd_comment] = useState("");
    const [ta_comment, setta_comment] = useState(null);
    const [querydone, setQuerydone] = useState("false");

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        console.log(exam_name, course_name, question_num, std_comment, ta_roll,);
        const configuration = {
            method: "post",
            url: "http://localhost:5000/queries/",
            data: {
                exam_name,
                course_name,
                question_num,
                std_comment,
                ta_roll,
                ta_comment
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setQuerydone(true);
            })
            .catch((error) => {
                error = new Error();
            });
    };
    // setta_comment("re");

    const handleChange = (event) => {
        setexam_name(event.target.value)
    }
    const handleChange1 = (event) => {
        setcourse_name(event.target.value)
    }
    const handleChange2 = (event) => {
        setquestion_num(event.target.value)
    }
    const handleChange3 = (event) => {
        setstd_comment(event.target.value)
    }
    const handleChange4 = (event) => {
        setta_roll(event.target.value)
    }
    return (
        <div>
            <div className="form">
                <div className="title">Query Form</div>
                <form>
                    <div className="input-container">
                        <label>Exam Name </label>
                        <input type="text" name="exam_name" required onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <label>Course Name </label>
                        <input type="text" name="course_name" required onChange={handleChange1} />
                    </div>
                    <div className="input-container">
                        <label>question_num No. </label>
                        <input type="text" name="question_num" required onChange={handleChange2} />
                    </div>
                    <div className="input-container">
                        <label>TA Name </label>
                        <select value={ta_roll} onChange={handleChange4}>
                            <option value="Abhishek">Abhishek</option>
                            <option value="user1">Shaon</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label>std_comment </label>
                        <textarea type="text" name="std_comment" required onChange={handleChange3} />
                    </div>
                    <div className="button-container">
                        <input type="submit" value={"Post"} onClick={(e) => handleSubmit(e)} />
                    </div>
                </form>
            </div>
        </div >
    );
};
export default Login;