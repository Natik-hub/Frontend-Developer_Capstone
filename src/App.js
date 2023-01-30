import {  Route, Routes } from "react-router-dom"
import Booking from "./components/Booking"
import Home from "./components/Home"


const App = () => {
  return (

      <Routes>
      { <Route index element={<Home />} /> }
        <Route path="/booking" element={<Booking />} />

      </Routes>

  )
}

export default App