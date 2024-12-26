import React from 'react'

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold mb-4">404 ERROR</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  )
}

export default PageNotFound
