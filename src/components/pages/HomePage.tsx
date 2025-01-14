export const HomePage = () => {
   return (
       <main className="flex flex-col items-center font-sans justify-center min-h-screen bg-white px-6 py-12">
           {/* Hero Section */}
           <section className="text-center">
               <h1 className="text-4xl font-bold text-gray-800 sm:text-6xl">
                   Welcome to Reading Tracker
               </h1>
               <p className="mt-4 text-lg text-gray-600">
                   Your personal assistant to track, manage, and explore your reading journey.
               </p>
               <div className="mt-6">
                   <a
                       href="/add-book"
                       className="inline-block rounded-md bg-[#E9AFA3] px-6 py-3 text-white text-lg font-medium hover:bg-[#D79A8F] transition"
                   >
                       Get Started
                   </a>
               </div>
           </section>
           {/* Features Section */}
           <section className="mt-12 px-6 py-12 bg-gray-50">
               <div className="max-w-4xl mx-auto text-center">
                   <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                       Why Choose Reading Tracker?
                   </h2>
                   <p className="mt-4 text-lg text-gray-600">
                       Discover how Reading Tracker can transform your reading experience.
                   </p>
               </div>
               <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                   {/* Feature 1 */}
                   <div className="flex flex-col items-center text-center">
                       <div className="bg-[#E9AFA3] rounded-full p-4">
                           <svg
                               xmlns="http://www.w3.org/2000/svg"
                               className="h-8 w-8 text-white"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                               strokeWidth={2}
                           >
                               <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l4 4L19 7"/>
                           </svg>
                       </div>
                       <h3 className="mt-4 text-xl font-semibold text-gray-800">
                           Track Your Books
                       </h3>
                       <p className="mt-2 text-gray-600">
                           Easily log and categorize books you’ve read or plan to read.
                       </p>
                   </div>
                   {/* Feature 2 */}
                   <div className="flex flex-col items-center text-center">
                       <div className="bg-[#E9AFA3] rounded-full p-4">
                           <svg
                               xmlns="http://www.w3.org/2000/svg"
                               className="h-8 w-8 text-white"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                               strokeWidth={2}
                           >
                               <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                           </svg>
                       </div>
                       <h3 className="mt-4 text-xl font-semibold text-gray-800">
                           Visualize Your Stats
                       </h3>
                       <p className="mt-2 text-gray-600">
                           Gain insights into your reading habits with intuitive charts.
                       </p>
                   </div>
                   {/* Feature 3 */}
                   <div className="flex flex-col items-center text-center">
                       <div className="bg-[#E9AFA3] rounded-full p-4">
                           <svg
                               xmlns="http://www.w3.org/2000/svg"
                               className="h-8 w-8 text-white"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                               strokeWidth={2}
                           >
                               <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   d="M3 10h11M9 21V3m8 10h5m-5 0l-3-3m3 3l-3 3"
                               />
                           </svg>
                       </div>
                       <h3 className="mt-4 text-xl font-semibold text-gray-800">
                           Discover Recommendations
                       </h3>
                       <p className="mt-2 text-gray-600">
                           Explore book suggestions tailored to your interests.
                       </p>
                   </div>
               </div>
           </section>
           {/* Testimonials Section: What Our Users Say */}
           {/* Call to Action (CTA) Section */}
       </main>
   )
};