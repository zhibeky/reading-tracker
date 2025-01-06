export const RadioButton = ({name, label, checked, onChange}) => (
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <input
            name={name}
            type='radio'
            checked={checked}
            onChange={onChange}
        />
        <span>{label}</span>
    </div>
);