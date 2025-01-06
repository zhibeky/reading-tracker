import {Label} from "../atoms/Label.tsx";

export const FormField = ({label, children}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Label>{label}</Label>
        {children}
    </div>
);