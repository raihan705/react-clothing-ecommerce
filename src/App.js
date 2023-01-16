import Home from "./pagesWithRoutes/homePage/Home";
import Navbar from "./pagesWithRoutes/navbar/Navbar";
import Shop from "./pagesWithRoutes/shopPage/Shop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
