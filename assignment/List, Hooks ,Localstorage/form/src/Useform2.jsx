import React, { useState } from 'react'


function Useform2() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    // Email validation function using regex
    const isValidEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setSubmittedData(formData);
            setErrors({}); // clear errors if any
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Validation Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>

                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>

                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>

                <br />
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Submitted Data:</h3>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Password:</strong> {submittedData.password}</p>
                </div>
            )}
        </div>
    );
}

export default Useform2
