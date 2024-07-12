import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import Project1Page from "./pages/Project1Page"

export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/dimi-react-portfolio" element={<HomePage />} />
        <Route path="/dimi-react-portfolio/projects" element={< ProjectsPage />} />
        <Route path="/dimi-react-portfolio/project1" element={ <Project1Page />} />
        <Route path="/dimi-react-portfolio/about" element={<AboutPage />} />
        <Route path="/dimi-react-portfolio/contact" element={<ContactPage />} />
      </Route>
    )
  );
  return router
}
