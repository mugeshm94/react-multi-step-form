import React from "react";
import "../../styles/Form.css";

const PersonalInfo = ({ formData, handleChange, handleNext, errors }) => {
  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email id"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? "error-input" : ""}
          />
          {errors.phoneNumber && (
            <p className="error-text">{errors.phoneNumber}</p>
          )}
        </div>
        <button type="button" onClick={handleNext} className="next-btn">
          NEXT
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
