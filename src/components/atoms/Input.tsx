import {ChangeEvent, FC} from "react";

interface InputProps {
    name: string,
    value: string | number,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    checked?: boolean,
    className?: string
}

export const Input: FC<InputProps> = ({name, value, checked, onChange, type = 'text'}) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        // className={className || ""}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
);