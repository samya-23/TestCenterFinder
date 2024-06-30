import React, { useState } from 'react';
import axios from 'axios';
import Results from './results';

const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [examDetails, setExamDetails] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/search?location=${location}&examDetails=${examDetails}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching results', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location"
                />
                <input
                    type="text"
                    value={examDetails}
                    onChange={(e) => setExamDetails(e.target.value)}
                    placeholder="Enter exam details"
                />
                <button type="submit">Search</button>
            </form>
            <Results results={results} />
        </div>
    );
};

export default SearchBar;
