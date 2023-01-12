import { BrowserRouter, Routes as SingleRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
export function Routes() {
    return (
        <BrowserRouter>
            <SingleRoutes>
                <Route path="/" element={<Home />} />
            </SingleRoutes>
        </BrowserRouter>
    )
}