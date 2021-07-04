import { NextFunction, Request, Response } from "express";
import { ErrorBase } from "../@types/errors/ErrorBase";
import { NotFound } from "../@types/errors/NotFound";

const errorMiddleware = (
  err: ErrorBase,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { statusCode, message } = err;
  response.status(statusCode).json({
    status: "error",
    message,
  });
};

export default errorMiddleware;
