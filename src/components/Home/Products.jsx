import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

function Products() {
    const data = useLoaderData();
    const productData = data.data;
    console.log(productData)

    return (
        <div className='product-div'>
            {productData.map((item) => (
                <div key={item.id} className='p-box flex-col gap-4'>
                    <div className='align-p'>
                        <img className='product-img' src={item.image} alt="product" />
                    </div>
                    <div className='p-div px-4'>
                        <div className='p-title '>
                            <h2 className='p-item-title tracking-wide text-sm text-gray-600 font-semibold'>{item.title.substring(0, 20)}</h2>
                            <p className='p-price'>${item.price}</p>
                        </div>
                        <div>
                            <p className='p-description'>{item.description.substring(0, 100)}...</p>
                            <div className='p-star-icon'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                        </div>
                        <div>
                            <button className="p-addfav-button">Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;

