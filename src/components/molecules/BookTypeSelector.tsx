import {BookIcon} from "../atoms/BookIcon.tsx";
import {RadioButton} from "../atoms/RadioButton.tsx"

export const BookTypeSelector = (isAudioBook, onChange) => (
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        <BookIcon />
        <div style={{ display: 'flex', gap: '16px' }}>
            <RadioButton
                name="bookType"
                label="Book"
                checked={!isAudioBook}
                onChange={()=>onChange(false)}
            />
            <RadioButton
                name="bookType"
                label="AudioBook"
                checked={isAudioBook}
                onChange={()=>onChange(true)}
            />
        </div>
    </div>
);