import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { Formulario } from './components/Formulario.js';
import { TablaRegistros } from './components/TablaRegistros.js';

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="titulo-gestion">Gestión de personal</h1>

    <div className="contenedor-principal">
                <Formulario />
                <TablaRegistros />
    </div>

      <Footer />
    </div>
  );
}

export default App;
