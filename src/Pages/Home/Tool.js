import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const { _id, name, img, description } = props.tool;
    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions justify-start">
                    <button onClick={() => navigateToPurchase(_id)} class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;