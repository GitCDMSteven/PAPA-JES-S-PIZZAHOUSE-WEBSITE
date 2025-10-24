// backend/controllers/users.controller.mjs

import * as userServices from "../services/users.service.mjs";

export const getUsers = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    res.status(200).json({
      message: "Users retrieved",
      data: users,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userServices.getUser(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User retrieved",
      data: user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    await userServices.createUser(user);
    res.status(201).json({ // 201 Created is more appropriate
      message: "User created",
    });
  } catch (err) {
    // Handle duplicate email error from MongoDB
    if (err.code === 11000) {
      return res.status(409).json({ message: "Email already exists" });
    }
    res.status(500).send(err.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = req.body;
    const { id } = req.params;
    const result = await userServices.updateUser(id, user);
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "User not found to update" });
    }
    res.status(200).json({
      message: `User updated`,
      data: user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userServices.deleteUser(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found to delete" });
    }
    res.status(200).json({
      message: "User deleted",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};