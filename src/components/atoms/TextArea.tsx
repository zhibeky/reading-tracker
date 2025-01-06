export const TextArea = ({name, value, onChange, rows=3, ...props}) => (
    <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px',
            outline: 'none',
            resize: 'vertical',
            width: '100%',
        }}
        {...props}
    />
);