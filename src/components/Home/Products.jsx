import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Products() {
    const data = useLoaderData();
    const productData = data.data;
    

    return (
        <div className='product-div grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10'>
            {productData.map((item) => (
                <div key={item.id} className='p-box'>
                    <span className='p-category'>{item.category}</span>
                    <div className='align-p'>
                        <img className='product-img' src={item.image} alt="product" />
                        <ul className='p-ul '>
                            <li className='p-lists'>Compare{""}<span><ApiIcon/></span></li>
                            <li className='p-lists'>Add to Cart{""}<span><ShoppingCartIcon/></span></li>
                            <li className='p-lists'>View details{""}<span><ArrowCircleRightIcon/></span></li>
                            <li className='p-lists'>Add to wish List{""}<span><FavoriteIcon/></span></li>
                        </ul>
                    </div>
                    <div className='p-div '>
                        <div className='p-title '>
                            <h2 className='p-item-title'>{item.title.substring(0, 20)}</h2>
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

