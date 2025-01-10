import {RadioButton} from "../atoms/RadioButton.tsx"
import {FC} from "react";

interface BookTypeSelectorProps {
    isAudioBook: boolean;
    onChange: (isAudioBook: boolean) => void;
}

export const BookTypeSelector: FC<BookTypeSelectorProps> = ({ isAudioBook, onChange }) => (

    <div className="flex items-center gap-4 font-sans">
        <div className="flex gap-4">
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