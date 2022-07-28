import React from 'react';
import {useRoutes} from "react-router-dom";

const Routes: React.FunctionComponent<{}> = props => {

    const routes = useRoutes([
        {
            path: '/',
            element: <div/>
        },
        {
            path: '/player',
            element: <div/>
        },
    ]);

    return (routes);
}

export default Routes;
