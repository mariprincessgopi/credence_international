import React from 'react';

export default function RatingBreakDown(props) {
    const { oneStarCount, twoStarCount,
        threeStarCount, fourStarCount,
        fiveStarCount } = props;

    return (
        <>
            <div className='col-sm-3 mt-2' style={{ marginLeft: '5%' }}>
                <h4>Rating breakdown</h4>
                <div className='pull-left'>
                    <div className='pull-left'>
                        5 <span className='star' style={{ fontSize: '25px' }}>&#9733;</span>
                    </div>
                    <div className='pull-left mt-3' style={{ width: '180px', marginLeft: '5%' }}>
                        <div className='progress'>
                            <div className='progress-bar bg-success' role='progressbar' style={{ width: '100%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='pull-right' style={{ marginLeft: '30px', marginTop: '-9%' }}>{fiveStarCount || 0}</div>
                </div>

                <div className='pull-left'>
                    <div className='pull-left'>
                        4 <span className='star' style={{ fontSize: '25px' }}>&#9733;</span>
                    </div>
                    <div className='pull-left mt-3' style={{ width: '180px', marginLeft: '5%' }}>
                        <div className='progress'>
                            <div className='progress-bar' role='progressbar' style={{ width: '80%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='pull-right' style={{ marginLeft: '30px', marginTop: '-9%' }}>{fourStarCount | 0}</div>
                </div>

                <div className='pull-left'>
                    <div className='pull-left'>
                        3 <span className='star' style={{ fontSize: '25px' }}>&#9733;</span>
                    </div>
                    <div className='pull-left mt-3' style={{ width: '180px', marginLeft: '5%' }}>
                        <div className='progress'>
                            <div className='progress-bar bg-info' role='progressbar' style={{ width: '60%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='pull-right' style={{ marginLeft: '30px', marginTop: '-9%' }}>{threeStarCount | 0}</div>
                </div>

                <div className='pull-left'>
                    <div className='pull-left'>
                        2 <span className='star' style={{ fontSize: '25px' }}>&#9733;</span>
                    </div>
                    <div className='pull-left mt-3' style={{ width: '180px', marginLeft: '5%' }}>
                        <div className='progress'>
                            <div className='progress-bar bg-warning' role='progressbar' style={{ width: '40%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='pull-right' style={{ marginLeft: '30px', marginTop: '-9%' }}>{twoStarCount | 0}</div>
                </div>

                <div className='pull-left'>
                    <div className='pull-left'>
                        1 <span className='star' style={{ fontSize: '25px' }}>&#9733;</span>
                    </div>
                    <div className='pull-left mt-3' style={{ width: '180px', marginLeft: '5%' }}>
                        <div className='progress'>
                            <div className='progress-bar bg-danger' role='progressbar' style={{ width: '20%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='pull-right' style={{ marginLeft: '30px', marginTop: '-9%' }}>{oneStarCount | 0}</div>
                </div>
            </div>
        </>
    )
}