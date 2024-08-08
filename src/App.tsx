import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import { publicRoutes } from './route';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)
  function test4(CALLBACK: ()=> void) {
    CALLBACK()
  }
  console.log(publicRoutes)
  return (
    <div className='app'>
        <Routes>
          {publicRoutes.map((route, index) => {
            return <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          })}
        </Routes>
        <ToastContainer />
    </div>
  )
}

export default App
