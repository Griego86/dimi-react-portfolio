import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Router } from "./router";

function App() {

  const router = Router()

  return (
    <RouterProvider router={router} />
  );
}

export default App;
