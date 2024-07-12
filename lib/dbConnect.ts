import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://kt9227833:HGBOsMFoNEngOrmu@cluster0.qmlbp1j.mongodb.net/"!);
  } catch (error) {
    throw new Error('Connection Failed!');
  }
};

export default dbConnect;
