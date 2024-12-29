import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Upload to the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Make the filename unique
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood); // Handle adding food with image upload
foodRouter.get("/list", listFood); // Handle listing all food items
foodRouter.post("/remove", removeFood); // Use DELETE method for removing food

export default foodRouter;



