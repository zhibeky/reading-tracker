import { Input } from '../atoms/Input';
import { TextArea } from '../atoms/TextArea';
import { FormField } from '../molecules/FormField';
import ReadingEase from '../molecules/ReadingEase';
import { BookTypeSelector } from '../molecules/BookTypeSelector';
import HeartRating from "../atoms/HeartRating.tsx";

export const BookForm = ({ bookData, onChange }) => {
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        onChange({
            ...bookData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleBookTypeChange = (isAudiobook) => {
        onChange({ ...bookData, isAudiobook });
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="grid gap-6">
                <FormField label="Select book type">
                    <BookTypeSelector
                        isAudiobook={bookData.isAudiobook}
                        onChange={handleBookTypeChange}
                    />
                </FormField>

                {/*Uncomment this to show FormFields in one column*/}
                {/*<div className="flex flex-col gap-4">*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Title">
                        <Input
                            name="title"
                            value={bookData.title}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="Author">
                        <Input
                            name="author"
                            value={bookData.author}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="My favourite character">
                        <Input
                            name="favouriteCharacter"
                            value={bookData.favouriteCharacter}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="Started reading">
                        <Input
                            type="date"
                            name="startedReading"
                            value={bookData.startedReading}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="Finished">
                        <Input
                            type="date"
                            name="finishedDate"
                            value={bookData.finishedDate}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="How much I liked it">
                        <HeartRating/>
                    </FormField>

                    <FormField label="About the author">
                        <TextArea
                            name="aboutAuthor"
                            value={bookData.aboutAuthor}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="A quote that made me think">
                        <TextArea
                            name="quote"
                            value={bookData.quote}
                            onChange={handleInputChange}
                        />
                    </FormField>
                </div>

                {/*<div className="flex flex-col gap-4">*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Genre">
                        <Input
                            name="genre"
                            value={bookData.genre}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="First published">
                        <Input
                            type="date"
                            name="publishedDate"
                            value={bookData.publishedDate}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="Would recommend to">
                        <Input
                            name="recommendTo"
                            value={bookData.recommendTo}
                            onChange={handleInputChange}
                        />
                    </FormField>

                    <FormField label="Ease of reading">
                        <ReadingEase/>
                    </FormField>

                    <FormField label="Summary">
                        <TextArea
                            name="summary"
                            value={bookData.summary}
                            onChange={handleInputChange}
                        />
                    </FormField>
                </div>
            </div>
        </div>
    );
};