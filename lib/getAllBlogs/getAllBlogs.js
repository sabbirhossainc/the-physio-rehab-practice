export default async function getAllBlogs() {
  const res = await fetch(`${process.env.BASE_URL}/blogs`, {
    next: { revalidate: 10 },
  });
  const blogs = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return blogs;
}
