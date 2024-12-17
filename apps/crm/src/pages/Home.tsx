import React from 'react';

import { Input, Button } from 'ui';
import { useStore } from 'context';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const user = useStore(state => state.getUser());

    return (
        <div>
            <nav className="flex justify-between items-center p-4 bg-gray-300">
                <h1>Home</h1>

                <div>
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                </div>
            </nav>

            <div className="p-4">
                <h1>Dashboard</h1>

                <div>
                    <p>Total Leads</p>
                    <p>100</p>
                </div>
            </div>
        </div>
    );
};
