export const Input = ({name, value, onChange, type='text'}) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
)