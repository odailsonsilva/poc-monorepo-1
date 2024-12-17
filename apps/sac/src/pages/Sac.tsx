import React from 'react';

import { useStore } from 'context';


export const SacPage = () => {
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
