export default async function getAllBlogs() {
  const res = await fetch('https://the-physio-rehab-practice-backend.netlify.app/.netlify/functions/api/blogs', {
    next: { revalidate: 10 },
  });
  const blogs = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return blogs;
}
