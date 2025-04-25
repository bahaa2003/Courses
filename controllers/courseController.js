import { Course } from '../models/Course.js';
import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getAllCourses = catchAsync(async (req, res) => {
  const courses = await Course.find();
  res.json({ status: 'success', data: courses });
});

export const getCourse = catchAsync(async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course) return next(new AppError('Course not found', 404));
  res.json({ status: 'success', data: course });
});

export const createCourse = catchAsync(async (req, res) => {
  const newCourse = await Course.create(req.body);
  res.status(201).json({ status: 'success', data: newCourse });
});

export const updateCourse = catchAsync(async (req, res, next) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { 
    new: true 
  });
  if (!course) return next(new AppError('Course not found', 404));
  res.json({ status: 'success', data: course });
});

export const deleteCourse = catchAsync(async (req, res, next) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return next(new AppError('Course not found', 404));
  res.status(204).json({ status: 'success', data: null });
});