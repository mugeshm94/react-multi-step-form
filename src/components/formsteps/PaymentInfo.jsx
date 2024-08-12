import React from "react";
import "../../styles/Form.css";

const PaymentInfo = ({
  step,
  formData,
  handleChange,
  handleBack,
  handleNext,
  errors,
}) => {
  const months = Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString().padStart(2, "0"),
    label: (i + 1).toString().padStart(2, "0"),
  }));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => ({
    value: (currentYear + i).toString(),
    label: (currentYear + i).toString(),
  }));
  return (
    <div className={`form-container ${step === 3 ? "active" : ""}`}>
      <h2>Payment Information</h2>
      <form>
        <div className="form-group">
          <label>Card Number</label>
          <input
            disabled={step != 3}
            type="text"
            name="cardNumber"
            placeholder="Enter 16 digit card number"
            value={formData.cardNumber}
            onChange={handleChange}
            className={errors.cardNumber ? "error-input" : ""}
          />
          {errors.cardNumber && (
            <p className="error-text">{errors.cardNumber}</p>
          )}
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <div className="expiry-date-group">
            <select
              name="expiryDateMonth"
              value={formData.expiryDateMonth}
              onChange={handleChange}
              className={errors.expiryDateMonth ? "error-input" : ""}
            >
              <option value="" disabled>
                MM
              </option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            <select
              name="expiryDateYear"
              value={formData.expiryDateYear}
              onChange={handleChange}
              className={errors.expiryDateYear ? "error-input" : ""}
            >
              <option value="" disabled>
                YYYY
              </option>
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
          </div>
          {errors.expiryDateMonth && (
            <p className="error-text">{errors.expiryDateMonth}</p>
          )}
          {errors.expiryDateYear && (
            <p className="error-text">{errors.expiryDateYear}</p>
          )}
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            disabled={step != 3}
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className={errors.cvv ? "error-input" : ""}
          />
          {errors.cvv && <p className="error-text">{errors.cvv}</p>}
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

export default PaymentInfo;
