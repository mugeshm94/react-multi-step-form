import React from "react";
import "../../styles/Form.css";

const AddressDetails = ({
  step,
  formData,
  handleChange,
  handleBack,
  handleNext,
  errors,
}) => {
  return (
    <div className={`form-container ${step === 2 ? "active" : ""}`}>
      <h2>Address Details</h2>
      <form>
        <div className="form-group">
          <label>Address</label>
          <input
            className={`address-text ${errors.address ? "error-input" : ""}`}
            type="text"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            className={errors.city ? "error-input" : ""}
          />
          {errors.city && <p className="error-text">{errors.city}</p>}
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="Choose your state"
            value={formData.state}
            onChange={handleChange}
            className={errors.state ? "error-input" : ""}
          />
          {errors.state && <p className="error-text">{errors.state}</p>}
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            placeholder="Enter postal code"
            value={formData.postalCode}
            onChange={handleChange}
            className={errors.postalCode ? "error-input" : ""}
          />
          {errors.postalCode && (
            <p className="error-text">{errors.postalCode}</p>
          )}
        </div>
        <div className="button-group">
          <button type="button" onClick={handleBack} className="go-back-btn">
            GO BACK
          </button>
          <button type="button" onClick={handleNext} className="next-btn">
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
