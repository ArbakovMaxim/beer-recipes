import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const ColorHtml = lazy(() => import("./pages/ColorHtml/ColorHtml"));
const ColorWebSafe = lazy(() => import("./pages/ColorWebSafe/ColorWebSafe"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/colorHtml" element={<ColorHtml />} />
            <Route path="/colorWebSafe" element={<ColorWebSafe />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
