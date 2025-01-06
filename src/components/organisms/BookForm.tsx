import { Input } from '../atoms/Input';
import { TextArea } from '../atoms/TextArea';
import { FormField } from '../molecules/FormField';
// import { HeartRating } from '../molecules/HeartRating';
// import { ReadingEase } from '../molecules/ReadingEase';
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
        <div style={styles.container}>
            <div style={styles.grid}>
                <BookTypeSelector
                    isAudiobook={bookData.isAudiobook}
                    onChange={handleBookTypeChange}
                />

                <div style={styles.column}>
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
                </div>

                <div style={styles.column}>
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

                    {/*<FormField label="Ease of reading">*/}
                    {/*    <ReadingEase*/}
                    {/*        rating={bookData.readingEase}*/}
                    {/*        onRatingChange={(rating) => onChange({ ...bookData, readingEase: rating })}*/}
                    {/*    />*/}
                    {/*</FormField>*/}

                    <FormField label="Summary">
                        <TextArea
                            name="summary"
                            value={bookData.summary}
                            onChange={handleInputChange}
                        />
                    </FormField>
                </div>

                <div style={styles.fullWidth}>
                    <FormField label="A quote that made me think">
                        <TextArea
                            name="quote"
                            value={bookData.quote}
                            onChange={handleInputChange}
                            rows={2}
                        />
                    </FormField>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    fullWidth: {
        gridColumn: '1 / -1',
    },
};