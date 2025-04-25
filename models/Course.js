import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  startDate: Date,
  endDate: Date,
  price: { type: Number, required: true }
}, { timestamps: true });

export const Course = mongoose.model('Course', courseSchema);