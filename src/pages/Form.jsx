import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setResult } from "../store/formSlice";

function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);

    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const [locationCoords, setLocationCoords] = useState(null);
    const totalSteps = 3;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocationCoords({ latitude, longitude });
                setShowLocationPopup(true);
            },
            (error) => {
                console.error("Error getting location:", error);
                setShowLocationPopup(false);
                navigate("/calculate-manually");
            }
        );
    }, []);

    const handleUseLocation = () => {
        setShowLocationPopup(false);
        navigate("/calculate");
    };

    const handleManual = () => {
        setShowLocationPopup(false);
        // Stay on manual form
    };

    const [formData, setFormData] = useState({
        name: "",
        pincode: "",
        roofArea: "",
        openSpace: "",
        dwellers: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.name && formData.dwellers;
            case 2:
                return formData.roofArea && formData.openSpace;
            case 3:
                return formData.pincode;
            default:
                return false;
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/calculate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
		// const result = formData.name

		


        if (response.ok) {
            dispatch(setResult(result));
            navigate("/result");
        }
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6 ">
                        <h3 className="text-xl font-semibold text-sky-700 mb-4 text-center">Personal Information</h3>
                        <div className="flex flex-col items-center">
                            <label className="block text-sky-700 font-medium mb-1">Full Name:</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <label className="block text-sky-700 font-medium mb-1">Number of Dwellers:</label>
                            <input
                                type="number"
                                name="dwellers"
                                required
                                value={formData.dwellers}
                                onChange={handleChange}
                                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                placeholder="How many people live in ?"
                                min="1"
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6 ">
                        <h3 className="text-xl font-semibold text-sky-700 mb-4 text-center">Property Details</h3>
                        <div className="flex flex-col items-center">
                            <label className="block text-sky-700 font-medium mb-1">Total Rooftop Area (sq.m):</label>
                            <input
                                type="number"
                                name="roofArea"
                                required
                                value={formData.roofArea}
                                onChange={handleChange}
                                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                placeholder="Enter total rooftop area in square meters"
                                min="1"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <label className="block text-sky-700 font-medium mb-1">Open Rooftop Area (sq.m):</label>
                            <input
                                type="number"
                                name="openSpace"
                                required
                                value={formData.openSpace}
                                onChange={handleChange}
                                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                placeholder="Enter open/available rooftop area"
                                min="0"
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6 text-center">
                        <h3 className="text-xl font-semibold text-sky-700 mb-4 text-center">Location Information</h3>
                        <div className="flex flex-col items-center">
                            <label className="block text-sky-700 font-medium mb-1">Pincode:</label>
                            <input
                                type="number"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                placeholder="Enter your area pincode"
                                minLength="6"
                                maxLength="6"
                            />
                        </div>
                        <div className="mt-8 p-4 bg-sky-50 rounded-lg">
                            <h4 className="font-semibold text-sky-700 mb-2">Review Your Information:</h4>
                            <div className="text-sm text-gray-700 space-y-1 text-left">
                                <p><span className="font-medium">Name:</span> {formData.name}</p>
                                <p><span className="font-medium">Dwellers:</span> {formData.dwellers}</p>
                                <p><span className="font-medium">Rooftop Area:</span> {formData.roofArea} sq.m</p>
                                <p><span className="font-medium">Open Area:</span> {formData.openSpace} sq.m</p>
                                <p><span className="font-medium">Pincode:</span> {formData.pincode}</p>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const LocationPopup = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Use Your Location?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        We detected your location. Would you like to use it for automatic calculation, or continue with manual entry?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleUseLocation}
                            className="flex-1 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors duration-300 font-medium"
                        >
                            Use Location
                        </button>
                        <button
                            onClick={handleManual}
                            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300 font-medium"
                        >
                            Manual Calculation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {showLocationPopup && <LocationPopup />}
            <div className="min-h-screen flex items-center justify-center" style={{background: "linear-gradient(120deg, #38bdf8 30%, #0ea5e9 40%, #ffffff 100%)"}}>
                <div className="card w-1/2 p-8 mt-30 mb-12 pt-8 pb-8 bg-white bg-opacity-90 shadow-xl animate-fadeInUp">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-sky-600 mb-4 text-center">Water Harvesting Assessment</h2>
                        {/* Progress Bar */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="flex items-center space-x-4">
                                {[1, 2, 3].map((step) => (
                                    <div key={step} className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                            currentStep >= step 
                                                ? 'bg-sky-500 text-white' 
                                                : 'bg-gray-300 text-gray-600'
                                        }`}>
                                            {step}
                                        </div>
                                        {step < 3 && (
                                            <div className={`w-12 h-1 ${
                                                currentStep > step ? 'bg-sky-500' : 'bg-gray-300'
                                            }`}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-center text-gray-600 mb-2">Step {currentStep} of {totalSteps}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {renderStep()}
                        {/* Navigation Buttons */}
                        <div className="flex justify-between pt-6">
                            <button
                                type="button"
                                onClick={handlePrevious}
                                disabled={currentStep === 1}
                                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                    currentStep === 1
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gray-500 text-white hover:bg-gray-600 transform hover:scale-105'
                                }`}
                            >
                                Previous
                            </button>
                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    disabled={!isStepValid()}
                                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                        !isStepValid()
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'btn-primary'
                                    }`}
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={!isStepValid()}
                                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                        !isStepValid()
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'btn-primary'
                                    }`}
                                >
                                    Submit Assessment
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Form;
