import React from 'react';

const Products = ({ product, index, setDeletingProduct }) => {
    const { name, img, price, quantity } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default Products;