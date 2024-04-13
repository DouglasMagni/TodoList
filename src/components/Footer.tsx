import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Todo List
        </p>
      </div>
    </footer>
  )
}

export default Footer