import Promotion from "./Promotion";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Promotion />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
