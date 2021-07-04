import express, { Request, Response } from "express";
import { NotFound } from "../@types/errors/NotFound";

const router = express.Router();

router.get("", (req: Request, res: Response) => {
  console.log('zo ro');
  
  throw new NotFound();
});

export default router;
