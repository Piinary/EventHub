import { Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./route";
import { ToastContainer } from "react-toastify";

function App() {
  console.log(publicRoutes);
  return (
    <div className="app">
      <Routes>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
