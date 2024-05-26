import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import Contacts from "./pages/Contacts/Contacts"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Navigation