export default async function getFaqs() {
  const res = await fetch(`${process.env.REACT_APP_BLOG_URL}/faqs`, {
    next: { revalidate: 10 },
  });
  const faqs = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return faqs;
}
