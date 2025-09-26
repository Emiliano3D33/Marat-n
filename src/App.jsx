import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Persona } from './persona'
import './App.css'
import Formulario from './formulario'

function App() {

  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Persona/>} />
          <Route path='/formulario' element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
