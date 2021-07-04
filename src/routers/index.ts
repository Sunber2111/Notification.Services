import express from "express";
import NotificationRouter from "./notification.router";

const router = express.Router();

router.use("/api/notification", NotificationRouter);

export default router;