
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Form(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
	const [formData, setFormData] = useState({
		name: "",
		city: "",
		pincode: "",
		roofType: "",
		soilType: "",
		roofArea: "",
		openSpace: "",
		dwellers: "",
	});
	const [pdfEnabled, setPdfEnabled] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	async function handleSubmit(e){
		e.preventDefault();
		 const response = await fetch("http://localhost:5000/api/assessments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        
         const result = await response.json()
         if(response.ok){
            dispatch()
            navigate("/result") // will set it later
         }

        }
		setPdfEnabled(true);
		alert("Form submitted!");
	};

	return (
		<form id="testForm" onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
			<label>Name:</label>
			<input type="text" name="name" required value={formData.name} onChange={handleChange} /><br /><br />

			<label>City:</label>
			<input type="text" name="city" required value={formData.city} onChange={handleChange} /><br /><br />

			<label>Pincode:</label>
			<input type="number" name="pincode" required value={formData.pincode} onChange={handleChange} /><br /><br />

			<label>Roof Type:</label>
			<select name="roofType" required value={formData.roofType} onChange={handleChange}>
				<option value="">-- Select Roof Type --</option>
				<option value="concrete">Concrete</option>
				<option value="metal">Metal</option>
				<option value="tiled">Tiled</option>
			</select><br /><br />

			<label>Soil Type:</label>
			<select name="soilType" required value={formData.soilType} onChange={handleChange}>
				<option value="">-- Select Soil Type --</option>
				<option value="sandy">Sandy</option>
				<option value="clay">Clay</option>
				<option value="loamy">Loamy</option>
			</select><br /><br />

			<label>Roof Area (sq.m):</label>
			<input type="number" name="roofArea" required value={formData.roofArea} onChange={handleChange} /><br /><br />

			<label>Open Space (sq.m):</label>
			<input type="number" name="openSpace" required value={formData.openSpace} onChange={handleChange} /><br /><br />

			<label>No. of Dwellers:</label>
			<input type="number" name="dwellers" required value={formData.dwellers} onChange={handleChange} /><br /><br />

			<button type="submit">Submit</button>
			
		</form>
	);


export default Form;
