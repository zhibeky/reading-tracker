import {FC, ReactNode} from "react";
import {Label} from "../atoms/Label.tsx";

type FormFieldProps = {
    label: string | ReactNode;
    children: ReactNode;
}

export const FormField: FC<FormFieldProps> = ({label, children}) => (
    <div className="flex flex-col gap-2">
        <Label>{label}</Label>
        {children}
    </div>
);