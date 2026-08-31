import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyTrips from "./pages/MyTrips";
import About from "./pages/About";
import Budget from "./pages/Budget";
import PlanTrip from "./pages/PlanTrip";

import Itinerary from "./pages/Itinerary";
import TripDetail from "./pages/TripDetail";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"

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
          <Route path='/budget' element={<Budget />} />
          <Route path='/itinerary' element={<Itinerary />} />
          <Route path='/trip-detail' element={<TripDetail />} />
        </Routes>
      </main>
    </div>
    <Footer />
    </>
  );
}

export default App;
