const About = () => {
    const aboutStyle = {
        textAlign: 'center',
        padding: '50px',
        color: '#333',
        fontFamily: 'Arial, sans-serif'
    };

    const headingStyle = {
        fontSize: '2.5rem',
        marginBottom: '20px'
    };

    const paragraphStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.8'
    };

    return (    
        <div style={aboutStyle}>
            <h1 style={headingStyle}>About Us</h1>
            <p style={paragraphStyle}>
                Welcome to [Your Swiggy Clone Name]! We are passionate about bringing the best restaurants to your doorstep.
                With a wide selection of cuisines and a user-friendly interface, we aim to make food ordering seamless and enjoyable.
                Whether you're craving fast food, Indian delicacies, or international dishes, we've got it all covered!
            </p>
        </div>
    );
}

export default About;
