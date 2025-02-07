import {FC} from "react";

export const About: FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">About Page</h1>
            <p className="mt-4">ReadOn is a simple Book Management System built with React and TypeScript to manage, edit, and store books dynamically. This app provides an intuitive user interface for listing, editing, and maintaining book information, with persistent data storage using LocalStorage. Designed with a focus on reusability and responsiveness, the app ensures a seamless user experience.</p>
        </div>
    );
};