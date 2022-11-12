const express = require('express');
const mongoose = require('mongoose');
let cors = require('cors');
const jwt = require("jsonwebtoken");
let bodyParser = require('body-parser');
const Query = require("./models/query.model");
const User = require("./models/user.model");
require('dotenv').config();
const port = process.env.PORT || 5001;
const app = express()
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
    response.json({ message: "Hey! This is your server response!" });
    next();
});
app.post("/register", (request, response) => {
    // hash the password
    // bcrypt
    //     .hashSync(request.body.password, 10)
    //     .then((hashedPassword) => {
    // create a new user instance and collect the data
    const user = new User({
        roll: request.body.roll,
        password: request.body.password,
        role: request.body.role,
    });

    // save the new user
    user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
            response.status(201).send({
                message: "User Created Successfully",
                result,
            });
        })
        // catch erroe if the new user wasn't added successfully to the database
        .catch((error) => {
            response.status(500).send({
                message: "Error creating user",
                error,
            });
        });
    // })
    // catch error if the password hash isn't successful
    // .catch((e) => {
    //     response.status(500).send({
    //         message: "Password was not hashed successfully",
    //         e,
    //     });
    // });
});
app.post("/login", (request, response) => {
    // check if email exists
    User.findOne({ roll: request.body.roll })

        .then((user) => {
            if (request.body.password != user.password) {
                return response.status(400).send({
                    message: "Passwords does not match",
                    error,
                });
            }

            //   create JWT token
            const token = jwt.sign(
                {
                    userId: user._id,
                    userroll: user.roll,
                },
                "RANDOM-TOKEN",
                { expiresIn: "24h" }
            );

            response.status(200).send({
                message: "Login Successful",
                roll: user.roll,
                token,
            });

        })
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });
});

app.post("/queries", (request, response) => {
    const query = new Query({
        exam_name: request.body.exam_name,
        course_name: request.body.course_name,
        question_num: request.body.question_num,
        std_comment: request.body.std_comment,
        ta_roll: request.body.ta_roll,
        ta_comment: request.body.ta_comment
    });
    query
        .save()
        .then((result) => {
            response.status(201).send({
                message: "Query Created Successfully",
                result,
            });
        })
        .catch((error) => {
            response.status(500).send({
                message: "Error creating query",
                error,
            });
        });
});

app.post("/update", (request, response) => {
    const query = new Query({
        exam_name: request.body.exam_name,
        course_name: request.body.course_name,
        question_num: request.body.question_num,
        std_comment: request.body.std_comment,
        ta_roll: request.body.ta_roll
    });
    const update = new Query({
        "$set": {
            "ta_comment": request.body.ta_comment
        }
    });
    query
        .updateOne(query, update)
        .then(result => {
            const { matchedCount, modifiedCount } = result;
            if (matchedCount && modifiedCount) {
                console.log(`Successfully updated the item.`)
            }
        })
        .catch(err => console.error(`Failed to update the item: ${err}`))
});

app.get("/getquery", (request, response) => {
    Query.find()
        .then(found => response.json(found))
});
app.get("/getconsern", (request, response) => {
    Query.find()
        .then(found => response.json(found))
});
// // exports = function () {
// const mongodb = context.services.get("Cluster0");
// const itemsCollection = mongodb.db("test").collection("queries");

// const query = { "question_num": { "$gte": 5 } };
// return itemsCollection.findOne(query)
//     .then(result => {
//         if (result) {
//             console.log(`Successfully found document: ${result}.`);
//         } else {
//             console.log("No document matches the provided query.");
//         }
//         return result;
//     })
//     .catch(err => console.error(`Failed to find document: ${err}`));
// // }