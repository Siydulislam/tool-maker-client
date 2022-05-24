import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={tool.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <div class="card-actions justify-start">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;