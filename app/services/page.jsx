import getAllBlogs from "@/lib/getAllBlogs/getAllBlogs";
import BgArtTemplate from "@/Templates/bgArtTemplate/BgArtTemplate";
import {
  Blog,
  BlogHeader,
  BlogBody,
  BlogFooter,
  ImageContainer,
} from "@/Templates/blog/Blog";

export async function generateMetadata() {
  const blogData = await getAllBlogs();

  const filterByBlog = (blog) => {
    const targetBlog = blog.blogheading.blogTitle.includes("services");
    if (targetBlog) {
      return true;
    } else {
      return false;
    }
  };

  const title = blogData
    ?.filter(filterByBlog)
    .map((blog) => blog.blogheading.blogTitle)[0];

  const description = blogData
    ?.filter(filterByBlog)
    .map((blog) => blog.blogheading.body)[0];

  return {
    title: title.toUpperCase(),
    description: description,
  };
}

export default async function page() {
  const blogData = await getAllBlogs();
  const filterByBlog = (blog) => {
    const targetBlog = blog.blogheading.blogTitle.includes("services");
    if (targetBlog) {
      return true;
    }
  };

  return (
    <BgArtTemplate>
      {blogData?.filter(filterByBlog)?.map((blog, index) => (
        <Blog key={index}>
          {/* Blog Image0 */}
          <ImageContainer
            src={blog.imginfo0.src}
            alt={blog.imginfo0.alt}
            addClass={blog.imginfo0.addClass}
            width={blog.imginfo0.width}
            height={blog.imginfo0.height}
          />
          {/* Blog Header */}
          <BlogHeader
            blogTitle={blog.blogheading.blogTitle}
            blogSubTitle={blog.blogheading.blogSubTitle}
            addClass={blog.blogheading.addClass}
          >
            {blog.blogheading.body}
          </BlogHeader>
          {/* Blog Image1 */}
          <ImageContainer
            src={blog.imginfo1.src}
            alt={blog.imginfo1.alt}
            addClass={blog.imginfo1.addClass}
            width={blog.imginfo1.width}
            height={blog.imginfo1.height}
          />
          {/* Blog Body */}
          {blog?.blogbody?.paras?.map((bodypara, index) => (
            <BlogBody key={index}>{bodypara.para}</BlogBody>
          ))}
          {/* Blog Footer */}
          <BlogFooter focus={blog.blogfooter.focus}>
            {blog.blogfooter.footerbody}
          </BlogFooter>
        </Blog>
      ))}
    </BgArtTemplate>
  );
}
