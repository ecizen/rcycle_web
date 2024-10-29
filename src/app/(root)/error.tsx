// pages/_error.tsx or app/error.tsx
import React from 'react';
import Link from 'next/link';

interface ErrorProps {
    statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">
                {statusCode ? `Error ${statusCode}` : 'An error occurred'}
            </h1>
            <p className="mt-4 text-lg">Sorry, something went wrong.</p>
            <Link href="/" className="mt-6 text-blue-500 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
};

// Define getInitialProps directly on the component
ErrorPage.getInitialProps = async ({ res, err }: { res: any; err?: any }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;
