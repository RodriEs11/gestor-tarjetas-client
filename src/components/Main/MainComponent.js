import React from 'react'

function Main({ children }) {
    return (
        <main className="flex-grow-1 d-flex justify-content-center align-items-center bg-dark">

            {children}

        </main>
    )
}

export default Main