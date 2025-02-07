import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export const User = mongoose.model('User', userSchema);

export const courseSchema = new mongoose.Schema({
    coursename: { type: String, required: true },
    teacher: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    startdate: { type: Date, required: true },
    price: { type: Number, required: true },
});

export const Course = mongoose.model('Course', courseSchema);

export const enrollmentSchema = new mongoose.Schema({
    courseid: { type: mongoose.Schema.Types.ObjectId, required: true },
    studentid: {type: mongoose.Schema.Types.ObjectId, required: true}
});

export const Enrollment = mongoose.model('Enrollment', enrollmentSchema);