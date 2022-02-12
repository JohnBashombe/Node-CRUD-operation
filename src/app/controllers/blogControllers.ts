import { Request, Response } from "express";
import { middlewares } from "../middlewares";

import Service from "../database/services";

const { responses, messages, codes } = middlewares;

const { Blog } = Service;

class BlogControllers {
  /**
   * @JohnBashombe
   * @param req
   * @param res
   */
  createBlog = async (req: Request, res: Response) => {
    // const { title, description } = req.body;
    console.log(req.body);
    // console.log(title);
    // console.log(description);
    // const response = await Blog.createBlog({ title, description });

    // if (!response) {
    //   return responses.error(codes.error(), messages.error(), res);
    // }

    // return responses.success(
    //   codes.created(),
    //   messages.created(),
    //   response,
    //   res
    // );
  };
}

export default BlogControllers;
