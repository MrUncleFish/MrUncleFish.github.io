import React from 'react';
import {useRoutes} from "react-router-dom";
import StartScreen from "../pages/StartScreen/StartScreen";

const Routes: React.FunctionComponent<{}> = props => {

    const routes = useRoutes([
        {
            path: '/',
            element: <StartScreen/>
        },
    ]);

    return (routes);
}

export default Routes;
