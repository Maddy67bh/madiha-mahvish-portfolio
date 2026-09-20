import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectPage from "./pages/ProjectPage";

export default function Root() {
  return <BrowserRouter><Routes><Route path="/" element={<App />} /><Route path="/projects/:id" element={<ProjectPage />} /></Routes></BrowserRouter>;
}
