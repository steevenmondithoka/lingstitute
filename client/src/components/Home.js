import React from 'react'

function Home() {

    const handleWhatsAppClick = () => {
        // Replace with your WhatsApp number and message
        const phoneNumber = "917893834064"; // Your WhatsApp number (with country code, no spaces or + symbol)
        const message = "Hello, I would like to chat with you!"; // Predefined message
    
        // WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
        // Open WhatsApp chat in a new tab
        window.open(whatsappURL, '_blank');
      };
  return (
    <div>
      
    
    <section class="main-section">
        <div class="container">
            <div class="main-content">
                <div class="text-content fade-in">
                    <h1>Inner Circle of IITs and IIITs</h1>
                    <p>Get a chance to learn corporate communication from Top professors and Industry Experts all over India</p>
                    <button style={{borderRadius:'20px'}} onClick={handleWhatsAppClick}>Enroll Now</button>
                </div>
                <div class="image-content">
                    <img src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JtfGVufDB8fDB8fHww" alt="People in meeting" />
                </div>
            </div>
        </div>
    </section>

   
    <section class="learning-section">
        <div class="container fade-in">
            <h2>A Balanced Approach to Learning</h2>
            <div class="learning-content">
                <div class="theory">
                    <h3>Theoretical Foundation</h3>
                    <p>Dive deep into the fundamentals of effective communication. Learn key principles, frameworks, and best practices. This section will lay the groundwork for your communication journey.</p>
                </div>
                <div class="practical">
                    <h3>Practical Application</h3>
                    <p>Put your knowledge into action through interactive exercises, simulations, and role-playing scenarios. These hands-on experiences will help you translate theory into real-world communication skills.</p>
                </div>
            </div>
        </div>
    </section>

   
    <section class="skills-section">
        <div class="container fade-in">
            <h2>Improve Your Communication Skills</h2>
            <div class="skills-content">
                <div class="skills-list">
                    <ul>
                        <li>
                            <h3>Clear and Concise Messaging</h3>
                            <p>Master the art of conveying your ideas effectively. Learn how to structure your messages, use persuasive language, and engage your audience.</p>
                        </li>
                        <li>
                            <h3>Active Listening</h3>
                            <p>Become a skilled listener, able to understand perspectives, respond empathetically, and build rapport with others.</p>
                        </li>
                        <li>
                            <h3>Conflict Resolution</h3>
                            <p>Gain the tools and techniques to navigate disagreements constructively. Learn how to address conflict effectively.</p>
                        </li>
                        <li>
                            <h3>Public Speaking</h3>
                            <p>Develop the confidence and skills to deliver impactful presentations and speeches.</p>
                        </li>
                    </ul>
                </div>
                <div class="skills-image fade-in">
                    <img src="https://as1.ftcdn.net/v2/jpg/02/74/48/84/1000_F_274488453_TWNuvPM3upfvtaJ7kJ6S85c007nNoFX8.jpg" alt="People collaborating" />
                </div>
            </div>
        </div>
    </section>

    <header>
        <h1>Engage in Thoughtful Discussions</h1>
    </header>

    <section class="discussion-section">
        <div class="discussion-box fade-in">
            <h2>1</h2>
            <h3>Debates</h3>
            <p>Sharpen your critical thinking and argumentation skills by participating in structured debates. This will help you formulate your points, respond effectively, and present compelling arguments.</p>
        </div>
        <div class="discussion-box fade-in">
            <h2>2</h2>
            <h3>Discussions</h3>
            <p>Engage in open and collaborative discussions on a range of communication topics. This fosters a safe space to share insights, challenge perspectives, and learn from others.</p>
        </div>
        <div class="discussion-box fade-in">
            <h2>3</h2>
            <h3>Case Studies</h3>
            <p>Analyze real-world scenarios. This will help you understand how communication principles are applied in diverse situations and develop your decision-making skills.</p>
        </div>
    </section>

    <section class="creativity-section fade-in">
        <h2 className='h2'>Unleash Your Creativity and Collaboration</h2>
        <ul>
            <li>What are Jam Sessions?</li>
            <li>How do Jam Sessions work?</li>
        </ul>
    </section>

    <section class="etiquette-section fade-in">
        <h2>Mastering Corporate Etiquette</h2>
        <table>
            <thead>
                <tr>
                    <th>Professionalism</th>
                    <th>Punctuality, Dress Code, Communication Style</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Respectful Communication</td>
                    <td>Active Listening, Clear and Concise Language, Avoiding Interruptions</td>
                </tr>
                <tr>
                    <td>Building Relationships</td>
                    <td>Networking, Building Trust, Showing Appreciation</td>
                </tr>
            </tbody>
        </table>
    </section>





    <main className="gamma-main-content">
        <section className="gamma-left-section slideInLeft-animation">
          <h1>Unleash Your Creativity and Collaboration</h1>
          <ul style={{listStyleType:'circle'}}>
            <li> What does a corporate interview look like?</li>
            <li> How do Jam Sessions work?</li>
          </ul>
          <img
            src=" https://img.freepik.com/free-photo/beautiful-young-woman-working-her-laptop-her-office-home_231208-13967.jpg"
            alt="Creativity illustration"
            className="gamma-image"
          />
        </section>

        <section className="gamma-right-section slideInRight-animation">
          <h2>Apply Your Skills in the Real World</h2>
          <div className="gamma-steps">
            <div className="gamma-step">
              <h3>1. Networking Events</h3>
              <p>Practice your communication skills in a professional setting. This provides opportunities to interact with peers, build connections, and expand your network.</p>
              
            </div>
            <div className="gamma-step">
              <h3>2. Internship Opportunities</h3>
              <p>Gain practical experience in a corporate environment. This allows you to apply your communication skills in real-world situations and develop valuable insights.</p>
              
            </div>
            <div className="gamma-step">
              <h3>3. Mentorship Programs</h3>
              <p>Receive guidance and support from experienced professionals in the field to grow your skills and advance your career.</p>
              
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="gamma-footer">
        <div className="gamma-discord-section fadeIn-animation">
          <h2>Discord Family</h2>
          <p>
            After the completion of Lingtitute workshop, you can stay in touch with the amazing people you met during the network and practice group discussions and debates anytime effortlessly.
          </p>
        </div>
        <div className="gamma-discord-image">
          <img src=" https://previews.123rf.com/images/gstockstudio/gstockstudio1602/gstockstudio160200106/51618132-successful-team-group-of-cheerful-young-people-discussing-something-with-smile-and-gesturing-while.jpg" alt="Discord Family" className="gamma-image"/>
        </div>
      </footer>
    



    </div>
  )
}

export default Home
