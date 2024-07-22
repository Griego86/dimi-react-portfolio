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
import Project1Page, { commentsLoader } from "./pages/Project1Page"
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/dimi-react-portfolio" element={<HomePage />} />
        <Route path="/dimi-react-portfolio/projects" element={< ProjectsPage />} />
        <Route path="/dimi-react-portfolio/project1" element={ <Project1Page />} loader={commentsLoader} />
        <Route path="/dimi-react-portfolio/about" element={<AboutPage />} />
        <Route path="/dimi-react-portfolio/contact" element={<ContactPage />} />
        <Route path="/dimi-react-portfolio/signup" element={<SignUpPage />} />
        <Route path="/dimi-react-portfolio/login" element={<LoginPage />} />
      </Route>
    )
  );
  return router
}
