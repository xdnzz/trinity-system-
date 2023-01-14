import { BrowserRouter, Routes as SingleRoutes, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Nav } from "../components/Nav/Nav";
import { Actions } from "../pages/Actions/Actions";
import { Demands } from "../pages/Demands/Demands";
import { Home } from "../pages/Home/Home";
import { Indicators } from "../pages/Indicators/Indicators";
import { Issues } from "../pages/Issues/Issues";
import { Normative } from "../pages/Normartive/Normative";
import { Stakeholders } from "../pages/Stakeholders/Stackholders";
export function Routes() {
    return (
        <BrowserRouter>
            <Nav />
            <Header />
            <SingleRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/stackholders" element={<Stakeholders />}/>
                <Route path="/issues" element={<Issues/>}/>
                <Route path="/actions" element={<Actions/>}/>
                <Route path="/demands" element={<Demands/>}/>
                <Route path="/normative" element={<Normative/>}/>
                <Route path="/indicators" element={<Indicators/>}/>
            </SingleRoutes>
        </BrowserRouter>
    )
}