import {FC, SyntheticEvent} from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

interface HeartRatingProps {
    value: number;
    onChange: (value: number) => void;
}

export const HeartRating: FC<HeartRatingProps> = ({value, onChange}) => {
    const handleRatingChange = (_event: SyntheticEvent, newValue: number | null) => {
        if (newValue !== null) {
            onChange(newValue);
        }
    };

    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
        <StyledRating
            name="customized-color"
            value={value}
            onChange={handleRatingChange}
            defaultValue={0}
            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            max={5}
        />
        </Box>
    );
}