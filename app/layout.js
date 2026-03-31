import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Providers from "./lib/redux/reduxUtels/reduxProvider";

export const metadata = {
  title: "Priti Mart",
  description: "a multi Productional store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
