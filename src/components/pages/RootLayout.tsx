import {Outlet} from "react-router";
import {Navbar} from "../organisms/NavBar.tsx";
import {Footer} from "../organisms/Footer.tsx"

export const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}