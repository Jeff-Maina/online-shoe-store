import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <main className="w-full">
      <Navbar />
      {/* <main className="w-full"> */}
      { children }
      {/* </main> */}
      <Footer />
    </main>
  );
};

export default Layout;
