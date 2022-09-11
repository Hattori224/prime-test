import './App.css';
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Box className="App">
        <Routes>
          <Route>
            <Route path="/" element={<Landing />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
