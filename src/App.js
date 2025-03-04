import "primeicons/primeicons.css"; // Ícones do PrimeReact
import "primereact/resources/primereact.min.css"; // Estilos básicos do PrimeReact
import "primereact/resources/themes/lara-light-blue/theme.css"; // Tema
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Menu from './components/Menu';
import Dashboard from "./pages/Dashboard";
import Pessoa from "./pages/Pessoa";
import Usuario from "./pages/Usuario";
import RotasUtil from "./Util/RotasUtil";


function App() {
  const location = useLocation();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {location.pathname !== "/" && location.pathname !== "/login" && (
        <div style={{ width: "300px", backgroundColor: "#f8f9fa", padding: "10px" }}>
          <Menu />
        </div>
      )}

      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path={RotasUtil.LOGIN.path} element={<Login />} />
          <Route path={RotasUtil.MENU.path} element={<Menu />} />
          <Route path={RotasUtil.DASHBOARD.path} element={<Dashboard />} />
          <Route path={RotasUtil.CADASTROPESSOA.path} element={<Pessoa />} />
          <Route path={RotasUtil.USUARIO.path} element={<Usuario />} />
          <Route path="*" element={<Navigate to={RotasUtil.LOGIN.path} />} />
        </Routes>
      </div>
    </div>
  );

}

export default App;
