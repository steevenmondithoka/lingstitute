import React from 'react';


const About = () => {
  return (
    <div className="about-container">
      {/* Our Mission Section */}
      <section className="about-section">
        <h1 className="about-heading">Our Mission</h1>
        <p className="about-text">
          At English Mastery, our mission is to help learners worldwide gain the confidence and skills to communicate effectively in English. We believe that learning English should be accessible, engaging, and empowering for all.
        </p>
      </section>

      {/* Why Learn With Us Section */}
      <section className="about-section">
        <h2 className="about-heading">Why Learn With Us</h2>
        <hr style={{color:'black'}}/>
        <div className="about-features">
          <div className="feature-item">
            <img src="https://www.ontariovirtualschool.ca/wp-content/uploads/Future-of-Education-Blog-Header.jpg" alt="Learn Anywhere" className="feature-img"/>
            <h3>Learn Anytime, Anywhere</h3>
            <p>With our flexible online courses, you can learn English at your own pace, from anywhere in the world.</p>
          </div>
          <div className="feature-item">
            <img src="https://researched.org.uk/wp-content/uploads/2020/03/best-in-class.jpg" alt="Expert Instructors" className="feature-img"/>
            <h3>Expert Instructors</h3>
            <p>Our instructors are experienced, certified, and passionate about teaching English to learners of all levels.</p>
          </div>
          <div className="feature-item">
            <img src="https://img.freepik.com/premium-photo/education-elementary-school-learning-people-concept-group-school-kids-with-teacher-talking-classroom_380164-83314.jpg" alt="Global Community" className="feature-img"/>
            <h3>Join a Global Community</h3>
            <p>Connect with thousands of learners from different parts of the world. Share experiences and improve together.</p>
          </div>
        </div>
      </section>
      <hr style={{color:'black'}}/>

      {/* Our Methods Section */}
      <section className="about-section">
        <h2 className="about-heading">Our Methods</h2>
        <p className="about-text">
          Our learning methods are backed by research and designed to maximize learning efficiency. We focus on immersive learning through real-life scenarios, interactive exercises, and personalized feedback.
        </p>
      </section>
 <hr style={{color:'black'}}/>
      {/* Meet the Team Section */}
      <section className="about-section">
        <h2 className="about-heading">Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://captiontools.com/wp-content/uploads/2017/03/testy3-1.png" alt="Team Member 1" className="team-img"/>
            <h4>John Doe</h4>
            <p>Founder & Chief Instructor</p>
          </div>
          <div className="team-member">
            <img src="https://www.sci.pitt.edu/sites/default/files/styles/person_large/public/person-images/jane_bio_pic-680x600-3_21-682_602.jpeg?itok=CpBOE951" alt="Team Member 2" className="team-img"/>
            <h4>Jane Smith</h4>
            <p>Head of Curriculum Design</p>
          </div>
          <div className="team-member">
            <img src="https://i0.wp.com/adivinesport.com/wp-content/uploads/2022/10/alex_johnson-headshot.jpg?fit=747%2C647&ssl=1" alt="Team Member 3" className="team-img"/>
            <h4>Alex Johnson</h4>
            <p>Lead Instructor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
