import { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate, replace } from "react-router-dom";
import LoginLanding from "./pages/LoginLanding";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Attendence from "./pages/Attendence";
import Leave from "./pages/Leave";
import Payslip from "./pages/Payslip";
import Settings from "./pages/Settings";
import PrintPayslip from "./pages/PrintPayslip";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslips/:id" element={<PrintPayslip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
      </Routes>
    </>
  );
};

export default App;
