import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from '../routes/routes';

const Router = () => {
    return (
        <Routes>
            {appRoutes.map((r) => (
                <Route key={r.path} path={r.path} element={r.component} />
            ))}
        </Routes>
    );
};

export default Router;
