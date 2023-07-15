import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./layout/Layout"));
const Beer = lazy(() => import("./pages/Beer"));
const BeerInfo = lazy(() => import("./pages/BeerInfo/BeerInfo"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Beer />}></Route>
            <Route path="/:ID" element={<BeerInfo />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
