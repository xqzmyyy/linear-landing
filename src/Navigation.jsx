import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import Contacts from "./pages/Contacts/Contacts"
import AboutUs from "./pages/AboutUs/AboutUs"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/about_us" element={<AboutUs/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Navigation