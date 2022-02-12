import { Request, Response, Application } from "express";
import BlogControllers from "../controllers/blogControllers";

import { middlewares } from "../middlewares/index";

const { responses, messages, codes } = middlewares;

const Blog = new BlogControllers();

/**
 * @JohnBashombe
 */
class Routes {
  /**
   * @JohnBashombe
   * @param app
   */
  public router = (app: Application): any => {
    app.post("/create", (req: Request, res: Response) => {
      console.log(req.body);
      res.send(req.body);
      // Blog.createBlog(req, res);
    });
    app.get("/", (req: Request, res: Response) => {
      responses.ok(codes.ok(), messages.welcomeMessage(), res);
    });
    app.all("*", (req: Request, res: Response) => {
      responses.ok(codes.notFound(), messages.pageNotFound(), res);
    });
  };
}

export const route = new Routes().router;
