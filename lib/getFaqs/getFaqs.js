export default async function getFaqs() {
    const res = await fetch(`${process.env.REACT_APP_BLOG_URL}/faq`, {
      next: { revalidate: 5 },
    });
    const faqs = await res.json();
  
    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }
  
    return faqs;
  }
  