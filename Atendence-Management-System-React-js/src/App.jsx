import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentSubmition from "./pages/StudentSubmition";
import ViewAllStudent from "./pages/ViewAllStudent";
import Navbar from "./Components/Navbar";
import FindStudent from "./pages/FindStudent";
import UpdateForm from "./pages/UpdateForm";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentSubmition />} />
        <Route path="/stdents" element={<FindStudent />} />
        <Route path="/viewall" element={<ViewAllStudent />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
