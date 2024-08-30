import { BrowserRouter, Routes, Route } from "react-router-dom";

import CoreTeam from "../pages/CoreTeam";
import Query from "../pages/Query";
import Sponsors from "../pages/Sponsors";
import Gallery from "../pages/Gallery";
import Media from "../pages/Media";
import Story from "../pages/3D";
import Brochure from "../pages/brochure";
import Attractions from "../pages/StarAttractions";
import Schedule from "../pages/schedule";
import Merch from "../pages/Merch";
import TempHome from "../pages/TempHome";

import { useMediaQuery } from "react-responsive";
import { useState } from "react";
const App = () => {
  const [show3D, setShow3D] = useState(
    useMediaQuery({
      query: "(min-width: 800px)",
    })
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              show3D ? (
                <Story switchMode={setShow3D} />
              ) : (
                <TempHome switchMode={setShow3D} />
              )
            }
          ></Route>{" "}
          <Route exact path="/gallery" element={<Gallery />}>
            {" "}
          </Route>{" "}
          <Route exact path="/media" element={<Media />}>
            {" "}
          </Route>{" "}
          <Route exact path="/sponsors" element={<Sponsors />}>
            {" "}
          </Route>{" "}
          <Route exact path="/queries" element={<Query />}>
            {" "}
          </Route>{" "}
          <Route exact path="/coreteam" element={<CoreTeam />}>
            {" "}
          </Route>{" "}
          <Route exact path="/brochure" element={<Brochure />}>
            {" "}
          </Route>{" "}
          <Route exact path="/attractions" element={<Attractions />}>
            {" "}
          </Route>{" "}
          <Route exact path="/schedule" element={<Schedule />}>
            {" "}
          </Route>{" "}
          <Route exact path="/merchandise" element={<Merch />}>
            {" "}
          </Route>{" "}
          <Route exact path="/story" element={<Story />}>
            {" "}
          </Route>{" "}
          <Route
            exact
            path="*"
            element={<h1> Error 404: Page Not Found </h1>}
          ></Route>{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default App;
