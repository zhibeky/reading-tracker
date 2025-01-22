import {ChangeEventHandler, FC} from "react";
// import {Input} from "../atoms/Input.tsx";

interface RadioButtonProps {
    name: string;
    label: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const RadioButton: FC<RadioButtonProps> = ({name, label, checked, onChange}) => (
    <div className="flex items-center gap-2">
        <input
            name={name}
            type='radio'
            checked={checked}
            onChange={onChange}
            className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        {/*<span>{label}</span>*/}
        <label className="text-sm font-medium text-gray-700">{label}</label>
    </div>
);