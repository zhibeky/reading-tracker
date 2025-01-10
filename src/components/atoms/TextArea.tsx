export const TextArea = ({name, value, onChange, rows=3}) => (
    <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="p-2.5 border border-gray-300 rounded-md text-sm w-full resize-y outline-none"
    />
);