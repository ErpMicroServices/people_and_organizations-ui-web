import React, {StrictMode} from "react";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";
import App from "./App";
import Home from "./Home/index";
import ErpTypeComponent from "./ErpTypeComponent";

async function getCaseRoleTypes() {
    const response = await fetch("/people_and_organizations/api/caseRoleTypes");
    const json = await response.json();
    return json;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/caseRoleTypes",
                element: <ErpTypeComponent id={"case-role-types"} title={"Case Role Types"}
                                           uri={"/people_and_organizations/api/caseRoleTypes"}/>,
                loader: getCaseRoleTypes
            }
        ]
    },

]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);
