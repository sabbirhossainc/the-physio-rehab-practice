import { blogData } from "@/lib/blogData";
import BgArtTemplate from "@/app/components/Templates/bgArtTemplate/BgArtTemplate";
import {
  Blog,
  BlogHeader,
  BlogFooter,
  BlogBody,
  ImageContainer,
} from "@/app/components/Templates/blog/Blog";
import {
  LinkGroup,
  Links,
  LinkBtn,
} from "@/app/components/Templates/linkGroup/LinkGroup";
import { notFound } from "next/navigation";

const page = ({ params }) => {
  const filterByBlog = (blog) => {
    const targetBlog = blog.blogheading.blogTitle.includes(params.slug);
    if (targetBlog) {
      return true;
    } else {
      return false;
    }
  };

  const flug = blogData?.filter(filterByBlog)

  if (flug.length == 0) {
    notFound()
  }

  return (
    <>
      <BgArtTemplate>
        {flug?.map((blog, index) => (
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
              {blog.blogheading.body}
            </BlogHeader>

            {/* Blog Links */}
            <BlogBody>{blog?.linkheading}</BlogBody>
            <LinkGroup>
              {blog?.links?.map((link, index) => (
                <Links key={index}>
                  <LinkBtn linkText={link.linkbtn} href={link.linkhref} />
                </Links>
              ))}
            </LinkGroup>
            {/* Blog Image2 */}
            <ImageContainer
              src={blog.imginfo2.src}
              alt={blog.imginfo2.alt}
              addClass={blog.imginfo2.addClass}
              width={blog.imginfo2.width}
              height={blog.imginfo2.height}
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
    </>
  );
};

export default page;
