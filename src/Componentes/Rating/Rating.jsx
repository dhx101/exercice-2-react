import React from "react";

const Rating = ({ rating }) => {
	return (
		<>
			{rating === 5 && (
				<div>
					<p>Star</p>
					<p>Star</p>
					<p>Star</p>
					<p>Star</p>
					<p>Star</p>
				</div>
			)}
            {rating === 4 && (
				<div>
					<p>Star</p>
					<p>Star</p>
					<p>Star</p>
					<p>Star</p>
					<p>No Star</p>
				</div>
			)}
            {rating === 3 && (
				<div>
					<p>Star</p>
					<p>Star</p>
					<p>Star</p>
					<p>No Star</p>
					<p>No Star</p>
				</div>
			)}
            {rating === 2 && (
				<div>
					<p>Star</p>
					<p>Star</p>
					<p>No Star</p>
					<p>No Star</p>
					<p>No Star</p>
				</div>
			)}
            {rating === 1 && (
				<div>
					<p>Star</p>
					<p>No Star</p>
					<p>No Star</p>
					<p>No Star</p>
					<p>No Star</p>
				</div>
			)}
		</>
	);
};

export default Rating;
