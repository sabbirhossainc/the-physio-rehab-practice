export default async function getAllBlogs() {
  const res = await fetch(`${process.env.REACT_APP_BLOG_URL}/physioblogs`, {
    next: { revalidate: 10 } 
  });
  const blogs = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return blogs;
}
