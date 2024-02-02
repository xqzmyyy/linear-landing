import { Route, Routes } from "react-router-dom";
import GetLinear from "./pages/GetLinear/GetLinear";
import Projects from "./pages/Projects/Projects";
import AboutUS from "./pages/AboutUs/AboutUs";
import BlogPage from "./pages/BlogPage/BlogPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Main from "./pages/Main/Main";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/contacts" element={<GetLinear/>}/>
            <Route path="/projects" element={<Projects/>}/>
            {/* <Route path="/projects/:id" element={<ProjectsInfo/>}/> */}
            <Route path="/blog" element={<AboutUS/>}/>
            <Route path="/blog/:id" element={<BlogPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Navigation