import "./globals.css";
import "flowbite";
import Navigation from "@/ui/navbar/navbar";
import Footer from "@/ui/footer/footer";
import Marquee from "@/ui/marquee/marquee";
import { BackToTop } from "@/app/components/buttons/buttons";

export const metadata = {
  title: "The physio rehab practice",
  description: "physiotherapy clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
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
        <BackToTop />
        <Marquee/>
        <Footer />
      </body>
    </html>
  );
}
