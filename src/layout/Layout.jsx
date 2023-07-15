import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { Container } from "../components/header/Header.styled";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Container>
          <Header />
          <Outlet />
          <Footer />
        </Container>
      </Suspense>
    </>
  );
};

export default Layout;
