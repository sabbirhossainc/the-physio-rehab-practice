import "./globals.css";
import "flowbite";
import Navigation from "@/ui/navbar/navbar";
import Footer from "@/ui/footer/footer";
import BackToTop from "@/ui/backToTop/backToTop";


export const metadata = {
  title: "The physio rehab practice",
  description: "physiotherapy clinic",
};  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
      </head>
      <body className={"font-sans"}>
        <Navigation />
        {children}
        <BackToTop/>
        <Footer />
      </body>
    </html>
  );
}
