import React from 'react';
import {useRoutes} from "react-router-dom";
import BodyPage from "../pages/BodyPage/BodyPage";

const Routes: React.FunctionComponent<{}> = props => {

    const routes = useRoutes([
        {
            path: '/',
            element: <BodyPage/>
        },
    ]);

    return (routes);
}

export default Routes;
