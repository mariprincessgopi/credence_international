import React from 'react';
import StarRating from './StarRating';
import { useHistory } from 'react-router-dom';
import { styles } from '../../assets/css/styles';

export default function ProductDisplay(props) {
    const { productName,
        productDescription,
        productRating
    } = props;

    const history = useHistory();

    const onProductPress = () => {
        history.push({
            pathname: '/productDetail',
            state: { props }
        });
    };

    const onSubmitPress = () => {

    };

    return (
        <>
            <div className='container d-flex justify-content-center' style={{ marginTop: '2%' }}>
                <div className='card col-9'>
                    <div className='card-header'>
                        Product Name: {productName}
                    </div>

                    <div className='row'>
                        <div className='col-9'>
                            <label style={{ opacity: 0.6, marginLeft: '5%', marginTop: '10%' }}>
                                Product Description: {productDescription}
                            </label>
                            <div className='ml-5' style={{ marginLeft: '10%' }}>
                                {/* {
                                    [1, 2, 3, 4, 5].map((item, index) => {
                                        return (
                                            item <= productRating ?
                                                <i className='fa fa-star' style={styles.ratingIcon} /> :
                                                <i className='fa fa-star-o' style={styles.ratingIcon} />
                                        )
                                    })
                                } */}

                                For display
                                <StarRating isReadOnly={true} />

                                Accessible rating
                                <StarRating />

                            </div>
                            <div className='text-center gap-2 mt-4'>
                                <button type='button' className='btn btn-outline-secondary' onClick={() => onProductPress()}>View Full Product Detail</button>
                                <button type='button' className='btn btn-outline-primary m-2' onClick={() => onSubmitPress()}>Add to Cart</button>
                            </div>
                        </div>
                        <div className='col-3'>
                            <img src='https://picsum.photos/200' style={styles.imageStyle} alt='Not Found' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}