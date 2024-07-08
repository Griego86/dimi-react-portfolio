import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/dimi-react-portfolio" element={<HomePage />} />
        <Route path="/dimi-react-portfolio/about" element={<AboutPage />} />
        <Route path="/dimi-react-portfolio/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return router
}
