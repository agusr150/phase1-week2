const express = require('express')
const app = express()
const port = 3000

//app.set('view enginer', )
const teachers = require("./data_teacher.json");
console.log(teachers)


app.get('/', function(req, res) {res.send('Hello World!')})

app.get('/teacher/', function(req,res){res.send(teachers)});

app.get('/teacher/:id', function(req,res){
    //res.send("the id is "+ req.params.id2)
     //let teacherId = parseInt(req.params.id);
     //res.send(teachers[teacherId])
     //let teacherId = teachers.find(req.params.id2);
    //    if (!teacherId) {
    //      res.status(404).send('TeacherID '+teacherId)
    //  } else {
         res.send(teachers[req.params.id-1]);
    //}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))