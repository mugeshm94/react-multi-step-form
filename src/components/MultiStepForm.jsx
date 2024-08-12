import React, { useState } from "react";
import PersonalInfo from "./formsteps/PersonalInfo";
import AddressDetails from "./formsteps/AddressDetails";
import PaymentInfo from "./formsteps/PaymentInfo";
import ReviewSubmit from "./formsteps/ReviewSubmit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/MultiStepForm.css";
import { db, collection, addDoc } from "../firebase";

const MultiStepForm = () => {
  const [step, setStep] = useState(4);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    cardNumber: "",
    expiryDateMonth: "",
    expiryDateYear: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear errors on change
    });
  };

  const validateStep = (step) => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone Number is required";
      } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Enter 10 digit phone Number";
      }
    }

    if (step === 2) {
      if (!formData.address.trim()) {
        newErrors.address = "Address is required";
      }
      if (!formData.city.trim()) {
        newErrors.city = "City is required";
      }
      if (!formData.state.trim()) {
        newErrors.state = "State is required";
      }
      if (!formData.postalCode.trim()) {
        newErrors.postalCode = "Postal Code is required";
      } else if (!/^\d{5,6}$/.test(formData.postalCode)) {
        newErrors.postalCode = "Postal Code is invalid";
      }
    }

    if (step === 3) {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card Number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber)) {
        newErrors.cardNumber = "Enter 16 Digit Card Number";
      }
      if (!formData.expiryDateMonth) {
        newErrors.expiryDateMonth = "Expiry Month is required";
      }
      if (!formData.expiryDateYear) {
        newErrors.expiryDateYear = "Expiry Year is required";
      }
      if (!formData.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV is invalid";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (validateStep(step)) {
      try {
        await addDoc(collection(db, "formDetails"), formData);
        toast.success(
          <>
            <div>Success!</div>
            <div>Your details are protected with top-notch security.</div>
          </>,
          {
            autoClose: 5000,
            style: {
              fontSize: "16px",
            },
          }
        );
      } catch (error) {
        console.log("error", error);
        toast.error("Error submitting form: " + error.message);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    }
  };

  return (
    <div className="multi-step-form-container">
      <ToastContainer />
      <div className="progress-div">
        <div className="progress-step-text">
          Step {step}
          <div style={{ display: "flex", alignItems: "center", width: "98%" }}>
            <div className="progress-bar" style={{ flex: 1 }}>
              <div
                className="progress-bar-inner"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
            <div
              style={{ color: "grey", marginLeft: "10px", fontSize: "12px" }}
            >
              {step}/4
            </div>
          </div>
        </div>
      </div>

      {step === 1 && (
        <PersonalInfo
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          errors={errors}
        />
      )}
      {step === 2 && (
        <AddressDetails
          formData={formData}
          handleChange={handleChange}
          handleBack={handleBack}
          handleNext={handleNext}
          errors={errors}
        />
      )}
      {step === 3 && (
        <PaymentInfo
          formData={formData}
          handleChange={handleChange}
          handleBack={handleBack}
          handleNext={handleNext}
          errors={errors}
        />
      )}
      {step === 4 && (
        <ReviewSubmit
          formData={formData}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
