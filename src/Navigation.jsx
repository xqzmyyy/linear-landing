import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default Navigation