import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contextdarl from "./component/contextmode";
import Header from "./component/header";
import Home from "./component/home";
import EmailForm from "./component/email";
import Upperfooter from "./component/upperfooter";
import Lowerfooter from "./component/lowerfooter";

function App() {
  return (
    <Contextdarl>
      <BrowserRouter>
        {/* Header */}
        <Header />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<EmailForm />} />
        </Routes>

        {/* Footer */}
        <Upperfooter />
        <Lowerfooter />
      </BrowserRouter>
    </Contextdarl>
  );
}

export default App;
