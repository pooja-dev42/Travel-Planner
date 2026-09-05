import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MyTrips from "./pages/MyTrips.jsx";
import About from "./pages/About.jsx";
import PlanTrip from "./pages/PlanTrip.jsx";
import Itinerary from "./pages/Itinerary.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className='app'>
        <main className='app-main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/my-trip' element={<MyTrips />} />
            <Route path='/about' element={<About />} />
            <Route path='/plan-trip' element={<PlanTrip />} />
            <Route path='/itinerary' element={<Itinerary />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
