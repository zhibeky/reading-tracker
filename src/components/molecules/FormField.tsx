import {Label} from "../atoms/Label.tsx";

export const FormField = ({label, children}) => (
    <div className="flex flex-col gap-2">
        <Label>{label}</Label>
        {children}
    </div>
);