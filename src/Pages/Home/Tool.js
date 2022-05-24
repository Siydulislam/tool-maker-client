import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={tool.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <div class="card-actions justify-start">
                    <Link to="/purchase" class="btn btn-primary">Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;