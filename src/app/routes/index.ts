import { Request, Response, Application } from "express";
import { middlewares } from "../middlewares/index";

const { responses, messages, codes } = middlewares;

class Routes {
  /**
   * @JohnBashombe
   * @param app
   */
  public router = (app: Application) => {
    app.get("/", (req: Request, res: Response) => {
      responses.ok(codes.ok(), messages.welcomeMessage(), res);
    });
    app.all("*", (req: Request, res: Response) => {
      responses.ok(codes.notFound(), messages.pageNotFound(), res);
    });
  };
}

export const route = new Routes().router;
