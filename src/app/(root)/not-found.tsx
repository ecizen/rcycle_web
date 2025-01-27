// pages/404.js or app/not-found.js
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="mt-6 text-blue-500 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
