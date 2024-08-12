import React from "react";
import "../../styles/ReviewSubmit.css";

const ReviewSubmit = ({ formData, handleBack, handleSubmit }) => {
  const {
    name,
    email,
    phoneNumber,
    address,
    city,
    state,
    postalCode,
    cardNumber,
    expiryDateMonth,
    expiryDateYear,
    cvv,
  } = formData;

  const maskedCardNumber = `**** **** **** ${cardNumber.slice(-4)}`;
  const maskedCVV = `***`;

  return (
    <div className="review-submit-container">
      <h2>Review & Submit</h2>

      <div className="review-section">
        <h3>Personal Information:</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
      </div>

      <div className="review-section">
        <h3>Address Details:</h3>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Postal Code: {postalCode}</p>
      </div>

      <div className="review-section">
        <h3>Payment Information:</h3>
        <p>Card Number: {maskedCardNumber}</p>
        <p>
          Expiry Date: {expiryDateMonth}/{expiryDateYear}
        </p>
        <p>CVV: {maskedCVV}</p>
      </div>

      <p className="review-note">
        Please review your information before submitting. You can navigate back
        to previous steps to make changes if necessary.
      </p>

      <div className="button-group">
        <button onClick={handleBack} className="go-back-btn">
          GO BACK
        </button>
        <button onClick={handleSubmit} className="submit-btn">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
