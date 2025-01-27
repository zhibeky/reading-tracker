import {FC, ChangeEvent} from "react";

type TextAreaProps = {
    name: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    rows?: number
}

export const TextArea: FC<TextAreaProps> = ({name, value, onChange, rows=3}) => (
    <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="p-2.5 border border-gray-300 rounded-md text-sm w-full resize-y outline-none"
    />
);