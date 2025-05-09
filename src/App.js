import React from 'react'

export function App() {

    return (
        <div>
            <h1>ID Perrito</h1>
            <input type="number" min={1} max={99999} style={{color: 'red'}}/>
            <input type="button" value="Submit" />
        </div>
    );
}
