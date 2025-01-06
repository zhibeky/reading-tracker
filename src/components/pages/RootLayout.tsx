import {Outlet} from "react-router";
import {Navbar} from "../organisms/NavBar.tsx";

export const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}