import { SignedIn, SignedOut } from "@clerk/clerk-react";
import {HomePage} from "../src/components/pages/HomePage.tsx"

export const App = () =>{
    return (
        <header>
            <SignedOut>
                {/*<SignInButton />*/}
                <HomePage />
            </SignedOut>
            <SignedIn>
                <HomePage />
            </SignedIn>
        </header>
    );
}
