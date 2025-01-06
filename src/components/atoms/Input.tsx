export const Input = ({name, value, onChange, type='text', ...props}) => (
    <input
        type={type}
        name={name}
        onChange={onChange}
        style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            outline: 'none',
            width: '100%',
        }}
        {...props}/>
)