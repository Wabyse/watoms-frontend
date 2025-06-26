import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import TomsPms from "./pages/TomsPms";
import TomsForm from "./pages/TomsForm";
import TraineeAbsence from "./pages/TraineeAbsence";
import InistituteIncident from "./pages/InistitueIncident";
import TomsInterview from "./pages/TomsInterview";
import TomsTest from "./pages/TomsTest";
import TomsDms from "./pages/TomsDms";
import TomsUploadDocument from "./pages/TomsUploadDocument";
import TomsViewDocument from "./pages/TomsViewDocument";
import TomsTms from "./pages/TomsTms";
import TomsViewTask from "./pages/TomsViewTask";
import TomsAssign from "./pages/TomsAssign";
import TomsMyTasks from "./pages/TomsMyTask";
import BulkData from "./pages/BulkData";

function App() {
  return (
    <div className="font-sans">
      <Router basename="/watoms">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route
            path="/bulk-data"
            element={
              <ProtectedRoute>
                <BulkData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pms"
            element={
              <ProtectedRoute>
                <TomsPms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pms/form/:id"
            element={
              <ProtectedRoute>
                <TomsForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pms/trainee-absence"
            element={
              <ProtectedRoute>
                <TraineeAbsence />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pms/inistitute-incident"
            element={
              <ProtectedRoute>
                <InistituteIncident />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pms/interview"
            element={
              <ProtectedRoute>
                <TomsInterview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pms/test"
            element={
              <ProtectedRoute>
                <TomsTest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dms"
            element={
              <ProtectedRoute>
                <TomsDms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dms/upload"
            element={
              <ProtectedRoute>
                <TomsUploadDocument />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dms/view/:id"
            element={
              <ProtectedRoute>
                <TomsViewDocument />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tms"
            element={
              <ProtectedRoute>
                <TomsTms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tms/assign"
            element={
              <ProtectedRoute>
                <TomsAssign />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tms/my-tasks"
            element={
              <ProtectedRoute>
                <TomsMyTasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tms/view/:id"
            element={
              <ProtectedRoute>
                <TomsViewTask />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;