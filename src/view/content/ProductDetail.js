import React from 'react';
import { styles } from '../../assets/css/styles';
import Header from '../Common/Header';
import RatingBreakDown from '../Common/RatingBreakDown';
import StarRating from '../Common/StarRating';

export default function ProductDetail(props) {
    const { productName,
        productDescription,
        productRating
    } = props.location.state.props;

    const productLastReview = [{
        reviewerName: 'asd asd',
        reviewStar: 4,
        reviewDescription: 'erdtfcygvbjhnkmltcfyvhj ktch yvgubhxetrcyvubi'
    }, {
        reviewerName: 'asd asd',
        reviewStar: 4,
        reviewDescription: 'erdtfcygvbjhnkmltcfyvhj ktch yvgubhxetrcyvubi'
    }];

    return (
        <>
            <Header />
            <div className='container d-flex justify-content-center mb-5' style={{ marginTop: '2%' }}>
                <div className='card col-9'>
                    <div className='card-header' style={{ backgroundColor: '#c2c2d6' }}>
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
                                {/* <button type='button' className='btn btn-outline-secondary' onClick={() => onProductPress()}>View Full Product Detail</button>
                                <button type='button' className='btn btn-outline-primary m-2' onClick={() => onSubmitPress()}>Add to Cart</button> */}
                            </div>
                        </div>
                        <div className='col-3'>
                            <img src='https://picsum.photos/200' style={{
                                borderRadius: '8%',
                                border: '3px solid #2D2D91',
                                margin: '5%'
                            }}
                                alt='Not Found' />
                        </div>
                    </div>

                    <RatingBreakDown oneStarCount={1} twoStarCount={2}
                        threeStarCount={3} fourStarCount={4}
                        fiveStarCount={5} />

                    {
                        productLastReview.map((item, index) => {
                            return (
                                <div className='d-flex justify-content-center mt-3 mb-3' key={index}>
                                    <div className='col-9 d-flex justify-content-center card' >
                                        <div className='card-header' style={styles.backgroundLightBlue}>
                                            Reviewer Name: {item.reviewerName}
                                        </div>
                                        <div style={{ backgroundColor: '#e0e0eb' }}>
                                            Reviewer Description: {item.reviewDescription}
                                            <StarRating productRating={item.reviewStar} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}