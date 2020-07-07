import React from 'react';

export const Layout = () => {
    return (
        <div className="outer">
            <header><h1>Carousel Example</h1></header>
            <div className="content"></div>
            <footer>
                <button>Prev</button>
                <button>Next</button>
            </footer>
        </div>
    )
}