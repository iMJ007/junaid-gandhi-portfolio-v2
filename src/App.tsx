import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { HomePage } from "./pages/HomePage";
import { CrisperPolicy } from "./pages/CrisperPolicy";
import { OrphicPolicy } from "./pages/OrphicPolicy";
import { SmartScribePolicy } from "./pages/SmartScribePolicy";
import { ResumePage } from "./pages/ResumePage";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/crisper/policy" element={<CrisperPolicy />} />
        <Route path="/orphic/policy" element={<OrphicPolicy />} />
        <Route path="/smartscribe/policy" element={<SmartScribePolicy />} />
      </Routes>
    </ThemeProvider>
  );
}
