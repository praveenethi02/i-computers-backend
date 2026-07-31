import Student from '../models/student.js'
import { isAdmin } from './userController.js'

export function getAllStudents(req, res){
        Student.find().then(
            (students) => {
                console.log(students)
                res.json(students)
            }
        )
    }

export function createStudent(req, res){
        //console.log(req.body)
        //console.log(req.user)

        //authorization
        // if(req.user == null){
        //     res.status(401).json({ message: "You need to logging first before creating student"});
        //     return
        // }

        // if(!req.user.isAdmin){
        //     res.status(403).json({ message: "You are not authorized to create a student"});
        //     return
        // }

        if(isAdmin(req)){
            const student = new Student(req.body)

            student.save().then(
            () => {
                res.json(
                    { message: "Student added successfully" }
                );
            }
        );

        }else {
            res.status(403).json({ message: "You need to login as an admin to create a student."});
        }

        
    }