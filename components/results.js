import React from 'react';

const Results = ({ results }) => {
    return (
        <div>
            {results.map((result, index) => (
                <div key={index}>
                    <h3>{result.transportType}</h3>
                    <p>Route: {result.route}</p>
                    <p>Cost: {result.cost}</p>
                    <p>Time: {result.time}</p>
                </div>
            ))}
        </div>
    );
};

export default Results;
