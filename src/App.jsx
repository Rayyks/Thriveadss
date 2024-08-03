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
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
