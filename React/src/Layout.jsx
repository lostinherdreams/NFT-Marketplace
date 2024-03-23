import { Outlet } from "react-router-dom"
import {NavBar} from "./components/Navbar"

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