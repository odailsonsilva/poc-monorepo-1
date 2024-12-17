import { Input, Button } from 'ui';
import { useStore } from 'context';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const { onLogin } = useStore();
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin({ id: '1', name: 'John Doe', email: 'john.doe@example.com' });
        navigate('/home');
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Login</h1>

                <div className="flex flex-col gap-2 min-w-[350px]">
                    <Input label="Email" />
                    <Input label="Password" />
                    <Button onClick={handleLogin}>Login</Button>
                </div>
            </div>
        </div>
    );
};
