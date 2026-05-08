import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";

const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const CrisperPolicy = lazy(() => import("./pages/CrisperPolicy").then(m => ({ default: m.CrisperPolicy })));
const OrphicPolicy = lazy(() => import("./pages/OrphicPolicy").then(m => ({ default: m.OrphicPolicy })));
const SmartScribePolicy = lazy(() => import("./pages/SmartScribePolicy").then(m => ({ default: m.SmartScribePolicy })));
const ResumePage = lazy(() => import("./pages/ResumePage").then(m => ({ default: m.ResumePage })));

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/crisper/policy" element={<CrisperPolicy />} />
          <Route path="/orphic/policy" element={<OrphicPolicy />} />
          <Route path="/smartscribe/policy" element={<SmartScribePolicy />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
