import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    )
}

export default Navigation