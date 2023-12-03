import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import Project from "./Project";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Labs" />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/project/*" element={<Project />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    </ChakraProvider>
  );
}
export default App;
