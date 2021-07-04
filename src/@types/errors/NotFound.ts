import { ErrorBase } from "./ErrorBase";

export class NotFound extends ErrorBase {
  statusCode: number = 404;
  constructor(message: string = "Không tìm thấy dữ liệu") {
    super(message);
  }
}
