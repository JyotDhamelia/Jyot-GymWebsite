import React from 'react'

const ErrorPage = () => {
  return (
    <div class="bg-gray-800 text-gray-400 min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-6xl font-bold">404</h1>
        <p class="text-2xl mt-4">Page not found</p>
        <a href="/" class="text-blue-500 hover:underline mt-4 block">Go back to the homepage</a>
      </div>
    </div>
  );
}
export default ErrorPage;
