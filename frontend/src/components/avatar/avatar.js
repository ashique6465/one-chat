import React, { useState } from 'react';

// Avatar component with fallback handling for boy and girl avatars
const Avatar = ({ src, alt, gender, className }) => {
  const [hasError, setHasError] = useState(false);

  // Handle image error by setting fallback based on gender
  const handleError = (event) => {
    if (!hasError) {
      setHasError(true); // Prevent further onError triggers
      if (gender === 'boy') {
        event.target.src = '/boy.jpg'; // Use the boy fallback image
      } else if (gender === 'girl') {
        event.target.src = '/girl.jpg'; // Use the girl fallback image
      } else {
        event.target.src = '/default-avatar.png'; // Optional: Add a generic fallback if needed
      }
    }
  };

  return (
    <img
      src={src}
      alt={alt || 'User Avatar'}
      className={className}
      onError={handleError}
    />
  );
};

export default Avatar;
