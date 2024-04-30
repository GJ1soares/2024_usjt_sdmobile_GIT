import React from "react";  
import { ReactDOM } from "react";
import app from "./componentes/app";
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import 'primereact/primereact.min.css'
import 'primereact/resources/themes/lara-dark-amber/theme.css'



ReactDOM.render(
    <app/>,
    document.querySelector('#root')

)