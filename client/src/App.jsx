import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Courses from "./pages/courses";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CreateCourse from "./pages/CreateCourse";
import ManageCoursePage from "./pages/ManageCourse";
import Authentication from "./pages/Authentication";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<ManageCoursePage />} />

          <Route path="/create-course" element={<CreateCourse />} />

          <Route path="/authentication/" element={<Authentication />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="logout" element={<Logout />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
