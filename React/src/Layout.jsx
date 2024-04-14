import { Outlet } from "react-router-dom"
import {NavBar} from "./components/NavBar/Navbar"

export function Layout(){
    return(
        <>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
    
        </>
    )
}