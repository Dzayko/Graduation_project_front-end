import Preloader from "./components/Preloader/Preloader";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Report = lazy(() => import("./pages/Report/Report"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
