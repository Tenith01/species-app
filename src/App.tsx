// src/App.tsx
import React, { useState } from 'react';
import { fetchSpeciesData, fetchSpeciesImages } from './api';

function App() {
    const [speciesName, setSpeciesName] = useState('');
    const [speciesData, setSpeciesData] = useState<any>(null);
    const [images, setImages] = useState<any[]>([]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await fetchSpeciesData(speciesName);
        setSpeciesData(data);
        if (data?.speciesKey) {
            const imageData = await fetchSpeciesImages(data.speciesKey);
            setImages(imageData);
        }
    };

    return (
        <div>
            <h1>Species Information</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter species name"
                    value={speciesName}
                    onChange={(e) => setSpeciesName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {speciesData && (
                <div>
                    <h2>Species Details:</h2>
                    <pre>{JSON.stringify(speciesData, null, 2)}</pre>
                </div>
            )}
            {images.length > 0 && (
                <div>
                    <h2>Species Images:</h2>
                    <div>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.media[0].identifier}
                                alt={image.media[0].title}
                                style={{ width: '200px', height: 'auto', marginRight: '10px', marginBottom: '10px' }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;