import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://bahaamohammed012003:bop12345@cluster0.uufjsmq.mongodb.net/courses");
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
