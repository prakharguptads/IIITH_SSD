const router = require('express').Router();
let Query = require('../models/query.model');

router.route('/').get((req, res) => {
    Query.find()
        .then(queries => res.json(queries))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const exam_name = req.body.exam_name;
    const course_name = req.body.course_name;
    const question_num = Number(req.body.question_num);
    const ta_roll = req.body.ta_roll;
    const std_roll = req.body.std_roll;
    const ta_comment = req.body.ta_comment;
    const std_comment = req.body.std_comment;
    const is_active = Boolean(req.body.is_active);

    const newQuery = new Query({
        exam_name, course_name, question_num, ta_roll, std_roll, ta_comment, std_comment, is_active
    });

    newQuery.save()
        .then(() => res.json('Query added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* 
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
*/

module.exports = router;