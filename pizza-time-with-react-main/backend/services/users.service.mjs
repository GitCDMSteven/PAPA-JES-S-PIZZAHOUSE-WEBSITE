// backend/services/users.service.mjs

import { connectToDatabase } from "../config/mongodb.mjs";

const getCollection = async () => {
  const db = await connectToDatabase();
  return db.collection("users");
};

export const getUsers = async () => {
  const usersCollection = await getCollection();
  return await usersCollection.find({}).toArray();
};

export const getUser = async (id) => {
  const usersCollection = await getCollection();
  return await usersCollection.findOne({ id: id });
};

export const createUser = async (user) => {
  const usersCollection = await getCollection();
  // MongoDB automatically handles if 'address' or 'number' are missing
  return await usersCollection.insertOne(user);
};

export const updateUser = async (id, user) => {
  const usersCollection = await getCollection();
  // The $set operator updates only the fields provided in the `user` object
  return await usersCollection.updateOne({ id: id }, { $set: user });
};

export const deleteUser = async (id) => {
  const usersCollection = await getCollection();
  return await usersCollection.deleteOne({ id: id });
};