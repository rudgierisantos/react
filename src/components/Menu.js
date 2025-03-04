import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate } from "react-router-dom";
import RotasUtil from "../Util/RotasUtil";
import '../styles/Menu.css';


function Menu() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-file',
            command: () => navigate(RotasUtil.dashboard.path),
        },
        {
            label: 'Cadastro',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Pessoa',
                    icon: 'pi pi-fw pi-user',
                    command: () => navigate(RotasUtil.cadastroPessoa.path),
                }
            ]
        },
        {
            label: 'Administrativo',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Usuário',
                    icon: 'pi pi-fw pi-user-plus',
                    command: () => navigate(RotasUtil.usuario.path),
                },
            ]
        },
        {
            label: 'Sair',
            icon: 'pi pi-fw pi-sign-out',
            command: () => navigate(RotasUtil.login.path),
        },

        
    ];

    return (
        <div className="p-4">
          <span className="titulo-menu">RSNTEC</span>
            <PanelMenu model={items} pt={{ root: { className: 'menu' } }} />
        </div>
    );
}

export default Menu;