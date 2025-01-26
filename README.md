# Book Management System

A simple Book Management System built with **React** and **TypeScript** to manage, edit, and store books dynamically. This app provides an intuitive user interface for listing, editing, and maintaining book information, with persistent data storage using LocalStorage. Designed with a focus on reusability and responsiveness, the app ensures a seamless user experience.

---

## Features

- **Dynamic Book List**: View a list of books with their details stored in LocalStorage.
- **Edit Book Details**: Update book information dynamically using a reusable `BookForm` component.
- **Persistent Storage**: Store book data in **LocalStorage**, enabling offline usage.
- **Navigation**: Seamless page routing using **React Router**, including dynamic routes for book editing (`/edit-book/:index`).
- **Responsive Design**: Styled with **Tailwind CSS** to ensure a mobile-friendly interface.
- **TypeScript Integration**: Provides a strongly typed codebase for better development experience and code quality.

---

## Tech Stack

**Frontend**:
- React (TypeScript)
- React Router (Dynamic Routing)
- Tailwind CSS (Responsive Styling)

**Storage**:
- LocalStorage (Persistent Data)

---

## Installation

Follow the steps below to set up the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/zhibeky/reading-tracker
   ```

2. Navigate to the project directory:
   ```bash
   cd reading-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Usage

1. **Add Books to LocalStorage**:
    - Before running the app or testing, you can add a small array of books into your local storage under the key `"books"`.
    - Example:
      ```js
      localStorage.setItem("books", JSON.stringify([
        { title: "Book 1", author: "Author 1", year: 2021, genre: "Fiction" },
        { title: "Book 2", author: "Author 2", year: 2020, genre: "Non-Fiction" }
      ]));
      ```
2. **Access Pages**:
   - **Home Page (HomePage.tsx)**:
       - Displays the list of books stored in LocalStorage.
       - Entry point of the application.
   - **Book Tracker Page (BookTrackerPage.tsx)**:
     - A dedicated page for tracking book statuses and details over time.
   - **Add Books Page (AddBooksPage.tsx)**:
     - Allows users to create new book entries and store them in LocalStorage.
   - **Edit Book Page (EditBookPage.tsx)**:
     - Dynamically accessible via `/edit-book/:index`.
     - Enables users to edit existing book details and save changes back to LocalStorage.
---

## Folder Structure

```plaintext
src/
│── components/
│   │── atoms/
│   │   │── BookIcon.tsx
│   │   │── GitHubLogo.tsx
│   │   │── HeartRating.tsx
│   │   │── Input.tsx
│   │   │── Label.tsx
│   │   │── RadioButton.tsx
│   │   │── TelegramLogo.tsx
│   │   │── TextArea.tsx
│   │
│   │── molecules/
│   │   │── BookTypeSelector.tsx
│   │   │── FormField.tsx
│   │   │── ReadingEase.tsx
│   │
│   │── organisms/
│   │   │── Authorize.tsx
│   │   │── BookForm.tsx
│   │   │── BookTracker.tsx
│   │   │── Footer.tsx
│   │   │── NavBar.tsx
│   │
│   │── pages/
│   │   │── AddBooksPage.tsx
│   │   │── BookTrackerPage.tsx
│   │   │── EditBookPage.tsx
│   │   │── HomePage.tsx
│   │   │── RootLayout.tsx

│── App.css
│── App.tsx
│── index.css
└── main.tsx                
```

---

[//]: # (## Demo)

[//]: # ()
[//]: # ([![Book Management App Demo]&#40;https://via.placeholder.com/800x400?text=Demo+Screenshot&#41;]&#40;https://github.com/YourUsername/book-management-system&#41;)

[//]: # ()
[//]: # (---)

## Contributing

Contributions are welcome! If you'd like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Create a pull request.

---

## Contact

For questions or collaboration:
- **Email**: [zhibek.engineer@gmail.com](mailto:zhibek.engineer@gmail.com)
- **GitHub**: [zhibeky](https://github.com/zhibeky)