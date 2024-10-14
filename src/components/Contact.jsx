import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here, you can send formData to your server or API
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us with any questions or feedback!</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'inline-block', marginTop: '20px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} 
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} 
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <textarea 
                        name="message"
                        placeholder="Your Message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
                    ></textarea>
                </div>
                <div>
                    <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#28a745', color: 'white', cursor: 'pointer' }}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
