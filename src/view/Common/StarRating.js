import React, { useState } from "react";
import { lightBlue, mainColor } from "../../assets/css/colors";

export default function StarRating(props) {
    const { isReadOnly, productRating, className } = props;
    const [rating, setRating] = useState(productRating | 0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={className | null}
                        style={(index <= (hover || rating)) ? {
                            backgroundColor: 'transparent',
                            border: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            color: mainColor
                        } : {
                            backgroundColor: 'transparent',
                            border: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                            color: lightBlue
                        }}
                        // className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => isReadOnly ? null : setRating(index)}
                        onMouseEnter={() => isReadOnly ? null : setHover(index)}
                        onMouseLeave={() => isReadOnly ? null : setHover(rating)}
                    >
                        <span className="star" style={{ fontSize: '30px' }}>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};
