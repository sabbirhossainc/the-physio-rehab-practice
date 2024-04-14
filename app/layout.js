import Navigation from "@/app/ui/navbar/navbar";
import Footer from "@/app/ui/footer/footer";
import "./globals.css";
import "flowbite";


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
        <Footer />
      </body>
    </html>
  );
}
