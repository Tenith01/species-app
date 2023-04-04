// src/App.tsx
import React, { useState } from 'react';
import { fetchSpeciesData } from './api';
import './App.css';

function App() {
    const [speciesName, setSpeciesName] = useState('');
    const [speciesData, setSpeciesData] = useState<any>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await fetchSpeciesData(speciesName);
        setSpeciesData(data);
    };

    return (
        <div className="app">
            <h1>Species Information</h1>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter species name"
                        value={speciesName}
                        onChange={(e) => setSpeciesName(e.target.value)}
                    />
                    <button type="submit">Find</button>
                </form>
            </div>
            {speciesData && (
                <div className="species-details">
                    <h3>Species Details:</h3>
                    <pre>{JSON.stringify(speciesData, null, 4)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;