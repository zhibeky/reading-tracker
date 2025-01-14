import {Outlet} from "react-router";
import {Navbar} from "../organisms/NavBar.tsx";
import {Footer} from "../organisms/Footer.tsx"

export const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-grow">
                <Outlet/>
            </main>
            <Footer className="py-4"/>
        </div>
    )
}