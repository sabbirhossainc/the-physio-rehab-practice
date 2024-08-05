import getAllBlogs from "@/lib/getAllBlogs/getAllBlogs";
import BgArtTemplate from "@/Templates/bgArtTemplate/BgArtTemplate";
import {
  Blog,
  BlogBody,
  BlogFooter,
  BlogHeader,
  ImageContainer,
} from "@/Templates/blog/Blog";
import { LinkBtn, LinkGroup, Links } from "@/Templates/linkGroup/LinkGroup";

export async function generateMetadata() {
  const blogData = await getAllBlogs();

  const filterByBlog = (blog) => {
    const targetBlog = blog.blogheading.blogTitle.includes("musculoskeletal");
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
  const pattern = /\W/g;

  const filterByBlog = (blog) => {
    const targetBlog = blog.blogheading.blogTitle.includes("musculoskeletal");
    if (targetBlog) {
      return true;
    }
  };

  return (
    <BgArtTemplate nobreadcrumb={true}>
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
          >
            {blog?.blogheading?.body}
          </BlogHeader>

          {/* Blog Links */}
          {pattern.test(`${blog?.linkheading}`) ? (
            <BlogBody>{blog?.linkheading}</BlogBody>
          ) : null}
          {blog?.links.length === 0 ? null : (
            <LinkGroup>
              {blog?.links?.map((link, index) => (
                <Links key={index}>
                  <LinkBtn linkText={link.linkbtn} href={link.linkhref} />
                </Links>
              ))}
            </LinkGroup>
          )}

          {/* Blog Image1 */}
          {pattern.test(`${blog?.imginfo1.src}`) ? (
            <ImageContainer
              src={blog.imginfo1.src}
              alt={blog.imginfo1.alt}
              addClass={blog.imginfo1.addClass}
              width={blog.imginfo1.width}
              height={blog.imginfo1.height}
            />
          ) : null}
          {/* Blog Body */}
          {blog?.blogbody?.paras.length === 0 ? null : (
            <>
              {blog?.blogbody?.paras?.map((bodypara, index) => (
                <BlogBody key={index}>{bodypara.para}</BlogBody>
              ))}
            </>
          )}
          {/* Blog Image2 */}
          {pattern.test(`${blog?.imginfo2.src}`) ? (
            <ImageContainer
              src={blog.imginfo2.src}
              alt={blog.imginfo2.alt}
              addClass={blog.imginfo2.addClass}
              width={blog.imginfo2.width}
              height={blog.imginfo2.height}
            />
          ) : null}
          {/* Blog Footer */}
          {pattern.test(`${blog?.blogfooter.focus}`) ? (
            <BlogFooter focus={blog.blogfooter.focus}>
              {blog?.blogfooter.footerbody}
            </BlogFooter>
          ) : null}
        </Blog>
      ))}
    </BgArtTemplate>
  );
}
