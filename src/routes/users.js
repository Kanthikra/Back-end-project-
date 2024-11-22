import { Router } from "express";
import createUser from "../services/users/createUser.js";
import deleteUserById from "../services/users/deleteUserById.js";
import getUserById from "../services/users/getUserById.js";
import getUsers from "../services/users/getUsers.js";
import updateUserById from "../services/users/updateUserById.js";
import authenticateJWT from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", authenticateJWT, async (req, res, next) => {
  try {
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;
    const newUser = await createUser(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", authenticateJWT, async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", authenticateJWT, async (req, res, next) => {
  try {
    const updatedUser = await updateUserById(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authenticateJWT, async (req, res, next) => {
  try {
    const deletedUser = await deleteUserById(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
});

export default router;
