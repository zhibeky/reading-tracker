import { SignInButton } from "@clerk/clerk-react";

export const Authorize = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            {/* Heading Section */}
            <h1 className="text-3xl font-extrabold text-center mb-4 text-gray-900">
                Welcome to Your Reading Tracker!
            </h1>
            <p className="text-lg text-center text-gray-600 mb-8">
                Start tracking your reading list and stay organized. Register now to get started!
            </p>

            {/* Sign-In Button Section */}
            <div className="mt-6 flex justify-center">
                <SignInButton>
                    <button
                        className="inline-block rounded-md bg-[#E9AFA3] px-6 py-3 text-white text-lg font-medium hover:bg-[#D79A8F] transition">
                        Sign In
                    </button>
                </SignInButton>
            </div>
        </div>
    );
}