import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Loader } from "./lib/Loader";
const LandingLayout = lazy(() => import("./layouts/LandingLayout"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="loader" element={<Loader />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
