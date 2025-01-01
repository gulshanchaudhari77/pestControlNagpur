import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your API key
      const placeId = "YOUR_PLACE_ID"; // Replace with your Place ID
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        } else {
          console.error("No reviews found:", data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-section p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {reviews.length > 0 ? (
        <div className="grid gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card border rounded-lg p-4 shadow-md"
            >
                <h1 className="text-red-900">hi</h1>
              <h3 className="text-lg font-semibold">{review.author_name}</h3>
              <p className="text-sm text-gray-600 italic">"{review.text}"</p>
              <p className="text-yellow-500">⭐ {review.rating}/5</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Review;
