import {  Route, Routes } from "react-router-dom"
import BookingPage from "./components/BookingPage"
import Home from "./components/Home"


const App = () => {
  return (

      <Routes>
      { <Route index element={<Home />} /> }
        <Route path="/booking" element={<BookingPage />} />

      </Routes>

  )
}

export default App