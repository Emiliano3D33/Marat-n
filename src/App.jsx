import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Pagina_principal from './componentes/Pagina_principal'
import Formulario from './componentes/formulario';


function App() {

  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagina_principal/>} />
          <Route path='/formulario' element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
