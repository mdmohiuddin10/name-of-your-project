import { DuStar } from "daisyui";



const StarRating = ({ rating }) => {
  // Calculate the number of full stars
  const fullStars = Math.floor(rating);
  
  // Determine if there is a half star
  const hasHalfStar = rating - fullStars >= 0.5;

  // Create an array to hold the star elements
  const stars = [];
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<DuStar key={i} fill="text-yellow-400" />);
  }
  
  // Add half star if present
  if (hasHalfStar) {
    stars.push(<DuStar key="half" fill="text-yellow-400" half="true" />);
  }
  
  // Add empty stars to reach a total of 5
  for (let i = stars.length; i < 5; i++) {
    stars.push(<DuStar key={i} fill="text-gray-300" />);
  }
  
  return <div className="flex items-center space-x-1">{stars}</div>;
};

export default StarRating;
