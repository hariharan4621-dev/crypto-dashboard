import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Watchlist from "./pages/Watchlist";
import CoinDetails from "./pages/CoinDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/watchlist"
          element={<Watchlist />}
        />

        <Route
          path="/coin/:id"
          element={<CoinDetails />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;