import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { PanelMenu } from 'primereact/panelmenu';
import RotasUtil from "../Util/RotasUtil";


function Menu() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-file',
            command: () => navigate(RotasUtil.DASHBOARD.path),
        },
        {
            label: 'Cadastro',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Pessoa',
                    icon: 'pi pi-fw pi-user',
                    command: () => navigate(RotasUtil.CADASTROPESSOA.path),
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
                    command: () => navigate(RotasUtil.USUARIO.path),
                },
            ]
        },
        {
            label: 'Sair',
            icon: 'pi pi-fw pi-sign-out',
            command: () => navigate(RotasUtil.LOGIN.path),
        },

        
    ];

    return (
        <div className="p-4">
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#6b7280', display: 'flex', justifyContent: 'center' }}>RSNTEC</span>
            <PanelMenu model={items} style={{ width: '280px', paddingTop: '24px' }} />
        </div>
    );
}

export default Menu;