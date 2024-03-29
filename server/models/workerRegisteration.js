import mongoose from 'mongoose';

const WorkerRegisterationSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    cnic: Number,
    work: String,
    contact: Number,
    salary: String,
    description: String,
    address: String,
    email: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const WorkerRegistration = mongoose.model('WorkerRegistration', WorkerRegisterationSchema);
export default WorkerRegistration;
