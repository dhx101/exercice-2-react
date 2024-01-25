import React from "react";
import Rating from "../Rating/Rating";

const Review = (data) => {
	return (
        
		<div>
        {data.data.map((item,index)=> (
            <div key={index}>
            <div>
                <img src={item.review.avatar} alt="Avatar"></img>
                <div>
                    <Rating rating={item.review.rating}></Rating>
                    <p>{item.review.title}</p>
                </div>
            </div>
            <p>{item.review.description}</p>
            <p>{item.review.date}</p>
            </div>
        ))}
        </div>
	);
};

export default Review;
