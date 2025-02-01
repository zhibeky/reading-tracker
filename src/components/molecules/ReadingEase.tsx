import {FC, SyntheticEvent} from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface ReadingEaseProps {
    value: number;
    onChange: (value: number) => void
}

export const ReadingEase: FC<ReadingEaseProps> = ({value, onChange}) => {
    const handleRatingChange = (_event: SyntheticEvent, newValue: number | null) => {
        if (newValue !== null) {
            onChange(newValue);
        }
    }
    return (
        <Stack spacing={1}>
            <Rating
                name="ease-of-reading"
                defaultValue={0}
                max={5}
                precision={0.5}
                value={value}
                onChange={handleRatingChange}
            />
        </Stack>
    );
}
