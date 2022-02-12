import Blog from "../entity/blog";

/**
 * @JohnBashombe
 */
class BlogServices {
  /**
   * @JohnBashombe
   * @param data
   */
  createBlog = async (data: object) => {
    const result = await Blog.insert(data);

    if (!result) {
      return null;
    }
    return result;
  };
}

export default BlogServices;
