import {FC} from "react";

export const AboutPage: FC = ()=> {
    return (
        <main className="min-h-screen bg-gray-100 px-6 py-12 flex flex-col items-center">
            <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">About Reading Tracker</h1>

                {/* Introduction */}
                <p className="text-gray-600 text-lg text-center mb-6">
                    Reading Tracker helps book lovers organize and track their reading journey effortlessly.
                </p>

                {/* Key Features */}
                <section className="mt-12 px-6 py-12 bg-gray-50">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-2xl">
                            Key Features
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Discover how Reading Tracker can transform your reading experience.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center text-center hover:bg-gray-100">
                            <div className="bg-[#E9AFA3] rounded-full p-2">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <rect width="24" height="24"></rect>
                                        <path
                                            d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                                            stroke="#ffffff" stroke-linejoin="round"></path>
                                        <path
                                            d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                                            stroke="#ffffff" stroke-linejoin="round"></path>
                                    </g>
                                </svg>


                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                Track Your Books
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Log books you've read or want to read.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex flex-col items-center text-center hover:bg-gray-100">
                            <div className="bg-[#E9AFA3] rounded-full p-2">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    strokeWidth={1.2}
                                >
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M10.5 10.5L11.5 11.5L14 9M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z"
                                            stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                Manage reading progress
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Keep track of start and finish dates.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex flex-col items-center text-center hover:bg-gray-100">
                            <div className="bg-[#E9AFA3] rounded-full p-2">
                                <svg
                                    className="icon h-8 w-8 text-white"
                                    viewBox="0 0 1024 1024"
                                    fill="#ffffff"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#ffffff"
                                    stroke-width={20}
                                >
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M679.964 943.91H8.106c-4.422 0-8-3.578-8-7.998v-67.206c0-49.458 25.386-68.33 72.228-85.858 8.998-3.374 20.814-6.716 34.492-10.592 46.686-13.214 117.234-33.18 117.234-71.484a7.992 7.992 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 50.394-74.484 71.484-128.872 86.888-13.334 3.764-24.856 7.03-33.236 10.17-41.904 15.684-61.846 30.274-61.846 70.876v59.208h655.864v-59.208c0-40.602-19.95-55.192-61.846-70.86-8.404-3.156-19.918-6.422-33.26-10.202-54.378-15.404-128.848-36.494-128.848-86.874a7.992 7.992 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 38.29 70.534 58.27 117.21 71.484 13.684 3.876 25.494 7.218 34.508 10.608 46.85 17.512 72.234 36.382 72.234 85.842v67.206a7.99 7.99 0 0 1-7.996 8z"
                                            fill=""></path>
                                        <path
                                            d="M344.036 735.954c-75.062 0-184.792-112.024-198.466-231.03a8.004 8.004 0 0 1 7.03-8.858 7.964 7.964 0 0 1 8.858 7.046c9.624 83.654 97.082 216.846 182.58 216.846 85.506 0 172.956-133.208 182.564-216.862 0.508-4.39 4.74-7.436 8.85-7.046a8.014 8.014 0 0 1 7.044 8.858c-13.672 119.006-123.39 231.046-198.46 231.046z"
                                            fill=""></path>
                                        <path
                                            d="M232.058 708.772a7.992 7.992 0 0 1-7.998-7.998v-35.898c0-4.422 3.576-8 7.998-8a7.994 7.994 0 0 1 7.998 8v35.898a7.994 7.994 0 0 1-7.998 7.998zM456.012 708.772a7.992 7.992 0 0 1-7.998-7.998v-35.898c0-4.422 3.576-8 7.998-8a7.994 7.994 0 0 1 7.998 8v35.898a7.994 7.994 0 0 1-7.998 7.998zM679.964 416.02c-1.466 0-2.92-0.406-4.202-1.188a8.028 8.028 0 0 1-3.796-6.81v-23.996h-39.992a7.994 7.994 0 0 1-7.998-8V88.088a7.994 7.994 0 0 1 7.998-7.998h383.922a7.994 7.994 0 0 1 7.998 7.998v287.94c0 4.422-3.578 8-7.998 8H745.842l-62.298 31.15c-1.126 0.56-2.36 0.842-3.58 0.842z m-39.99-47.99h39.99a7.994 7.994 0 0 1 7.998 7.998v19.058l52.412-26.212a8.148 8.148 0 0 1 3.576-0.844h263.946V96.086H639.974v271.944z"
                                            fill=""></path>
                                        <path
                                            d="M747.716 272.018a7.916 7.916 0 0 1-3.734-0.92l-16.028-8.436-16.028 8.436a7.968 7.968 0 0 1-8.436-0.61 7.992 7.992 0 0 1-3.188-7.812l3.062-17.886-12.982-12.654a8.002 8.002 0 0 1 4.436-13.654l17.934-2.594 8.03-16.262c2.688-5.436 11.654-5.436 14.342 0l8.028 16.262 17.936 2.594a8 8 0 1 1 4.434 13.654l-12.98 12.654 3.06 17.886a7.996 7.996 0 0 1-3.186 7.812 7.964 7.964 0 0 1-4.7 1.53z m-19.76-26.4c1.282 0 2.562 0.312 3.734 0.922l5.42 2.86-1.046-6.062a8.022 8.022 0 0 1 2.312-7.078l4.376-4.264-6.046-0.874a8.014 8.014 0 0 1-6.03-4.376l-2.718-5.514-2.718 5.514c-1.17 2.36-3.42 4-6.03 4.376l-6.044 0.874 4.374 4.264a8.014 8.014 0 0 1 2.312 7.078l-1.046 6.062 5.422-2.86a8.04 8.04 0 0 1 3.728-0.922zM843.698 272.018a7.916 7.916 0 0 1-3.734-0.92l-16.028-8.436-16.028 8.436a7.968 7.968 0 0 1-8.436-0.61 7.992 7.992 0 0 1-3.188-7.812l3.062-17.886-12.982-12.654a8.002 8.002 0 0 1 4.436-13.654l17.934-2.594 8.03-16.262c2.686-5.436 11.654-5.436 14.34 0l8.03 16.262 17.934 2.594a8 8 0 1 1 4.436 13.654l-12.98 12.654 3.06 17.886a7.996 7.996 0 0 1-3.186 7.812 7.972 7.972 0 0 1-4.7 1.53z m-19.762-26.4c1.282 0 2.562 0.312 3.734 0.922l5.42 2.86-1.046-6.062a8.016 8.016 0 0 1 2.312-7.078l4.374-4.264-6.044-0.874a8.014 8.014 0 0 1-6.03-4.376l-2.718-5.514-2.718 5.514c-1.172 2.36-3.42 4-6.03 4.376l-6.044 0.874 4.374 4.264a8.014 8.014 0 0 1 2.312 7.078l-1.046 6.062 5.42-2.86a8.06 8.06 0 0 1 3.73-0.922zM939.678 272.018a7.916 7.916 0 0 1-3.734-0.92l-16.028-8.436-16.028 8.436a7.972 7.972 0 0 1-8.438-0.61 7.996 7.996 0 0 1-3.186-7.812l3.06-17.886-12.98-12.654a8.002 8.002 0 0 1 4.434-13.654l17.936-2.594 8.028-16.262c2.688-5.436 11.656-5.436 14.342 0l8.03 16.262 17.934 2.594a8 8 0 1 1 4.436 13.654l-12.982 12.654 3.062 17.886a7.992 7.992 0 0 1-3.188 7.812 7.962 7.962 0 0 1-4.698 1.53z m-19.762-26.4c1.282 0 2.562 0.312 3.734 0.922l5.42 2.86-1.046-6.062a8.016 8.016 0 0 1 2.312-7.078l4.374-4.264-6.044-0.874a8.01 8.01 0 0 1-6.03-4.376l-2.718-5.514-2.718 5.514a8.014 8.014 0 0 1-6.03 4.376l-6.044 0.874 4.374 4.264a8.014 8.014 0 0 1 2.312 7.078l-1.046 6.062 5.42-2.86a8.06 8.06 0 0 1 3.73-0.922zM567.988 464.01a7.994 7.994 0 0 1-7.998-7.998c0-119.084-96.878-215.956-215.956-215.956-119.078 0-215.956 96.87-215.956 215.956a7.994 7.994 0 0 1-7.998 7.998c-4.422 0-8-3.578-8-7.998 0-127.896 104.056-231.952 231.954-231.952 127.894 0 231.952 104.056 231.952 231.952a7.994 7.994 0 0 1-7.998 7.998z"
                                            fill=""></path>
                                        <path
                                            d="M120.082 751.95c-4.422 0-8-3.576-8-7.998v-287.94a7.994 7.994 0 0 1 8-7.998 7.994 7.994 0 0 1 7.998 7.998v287.94a7.994 7.994 0 0 1-7.998 7.998zM567.988 751.95a7.994 7.994 0 0 1-7.998-7.998v-287.94a7.994 7.994 0 0 1 7.998-7.998 7.992 7.992 0 0 1 7.998 7.998v287.94a7.992 7.992 0 0 1-7.998 7.998z"
                                            fill=""></path>
                                        <path
                                            d="M120.082 496.002a8.01 8.01 0 0 1-7.648-5.656 8.008 8.008 0 0 1 5.304-9.998c280.192-85.904 362.924-199.334 363.728-200.474a8 8 0 0 1 11.138-1.92 7.988 7.988 0 0 1 1.954 11.122c-3.376 4.812-85.858 118.804-372.134 206.584a8.146 8.146 0 0 1-2.342 0.342z"
                                            fill=""></path>
                                        <path
                                            d="M567.988 496.002a7.78 7.78 0 0 1-2.888-0.546c-124.272-48.288-177.378-121.084-179.582-124.162a7.996 7.996 0 0 1 1.852-11.154 7.968 7.968 0 0 1 11.154 1.844c0.516 0.704 52.856 72.11 172.356 118.568a7.976 7.976 0 0 1 4.56 10.342 7.992 7.992 0 0 1-7.452 5.108zM344.036 815.938c-115.578 0-149.922-65.598-151.328-68.392a7.988 7.988 0 0 1 3.554-10.732 7.986 7.986 0 0 1 10.722 3.516c1.282 2.5 31.97 59.612 137.05 59.612 105.12 0 135.588-57.158 136.83-59.596a8.04 8.04 0 0 1 10.74-3.516 7.986 7.986 0 0 1 3.554 10.702c-1.396 2.792-35.53 68.406-151.122 68.406z"
                                            fill=""></path>
                                    </g>
                                </svg>
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                Rate and review
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Add personal notes, favorite quotes, and ratings.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="flex flex-col items-center text-center hover:bg-gray-100">
                            <div className="bg-[#E9AFA3] rounded-full p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1}>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 10h4v11H3zM10 3h4v18h-4zM17 8h4v13h-4z"
                                    />
                                </svg>

                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                Discover insights
                            </h3>
                            <p className="mt-2 text-gray-600">
                                View stats about your reading habits.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">How It Works</h2>
                    <p className="text-gray-700">
                        Simply add books to your list, update your reading progress, and manage details
                        like ratings, quotes, and personal insights. Your data is securely stored locally on your
                        device.
                    </p>
                </section>

                {/* About Developer (Optional) */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">About the Developer</h2>
                    <p className="text-gray-700">
                        This project was built with React and TypeScript to provide an intuitive and
                        user-friendly way to track reading progress. Designed with simplicity and usability in mind!
                    </p>
                </section>
            </div>
        </main>
    );
}
