import React from 'react';
import Header from '../Common/Header';
import ProductDisplay from '../Common/ProductDisplay';

export default function Home() {
    return (
        <>
            <Header />
            <ProductDisplay productName='abc' productDescription='here are many variationThe generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' productRating={5} />
        </>
    )
}
