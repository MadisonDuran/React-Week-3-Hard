import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List.jsx";
import Detail from "./pages/Detail.jsx";
import Edit from "./pages/Edit.jsx";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/todo/:id" element={<Detail />} />
        <Route path="/todo/:id/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
