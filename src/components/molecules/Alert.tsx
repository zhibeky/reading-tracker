import {FC, ReactNode} from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface AlertProps {
    severity: 'success' | 'info' | 'warning' | 'error';
    children: ReactNode;
}

export const BasicAlerts: FC<AlertProps> = ({severity, children}) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={severity}>{children}</Alert>
        </Stack>
    );
}
