import { Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./route";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./context";

function App() {
  console.log(publicRoutes);
  return (
    <div className="app">
     <AppProvider>
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
     </AppProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
