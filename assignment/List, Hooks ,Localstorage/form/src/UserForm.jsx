import React, { useState } from 'react'

function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };
    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Registraion Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
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

export default UserForm
