import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RotasUtil from "../Util/RotasUtil";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            navigate(RotasUtil.dashboard.path);
        } else {
            alert('Usuário ou senha inválidos');
        }
    };

    return (
        <div style={{ textAlign: 'center' }} className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="w-96 p-5 shadow-lg">
                <h2 className="text-center text-xl mb-4">Login</h2>
                <label>Usuário</label>
                <div className="mb-3">
                    <InputText className="w-full" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <label>Senha</label>
                <div className="mb-3">
                    <Password className="w-full" feedback={false} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button style={{ marginTop: '10px' }} label="Entrar" icon="pi pi-sign-in" className="w-full" onClick={handleLogin} />
            </Card>
        </div>
    );
}

export default Login;