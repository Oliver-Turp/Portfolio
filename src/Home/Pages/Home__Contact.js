import { Helmet, HelmetProvider } from "react-helmet-async";

import "../Styles/home__contact.css";

const Home__Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Oliver Turp | Contact</title>
        </Helmet>
      </HelmetProvider>
      <div className="home__contact-wrap">
        <div className="home__contact-wrap_margin">
          <h1>contact me</h1>
          <div className="home__contact-wrap_content-wrap">
            <div className="home__contact-wrap_content-wrap_left">
              <form
                action=""
                method="POST"
                className="home__contact-wrap_content-wrap_left_form"
              >
                <div className="home__contact_input-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="home__contact_input-item"
                    required
                  />
                </div>
                <div className="home__contact_input-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="home__contact_input-item"
                    required
                  />
                </div>
                <div className="home__contact_input-group">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    className="home__contact_input-item"
                  />
                </div>
                <div className="home__contact_input-group">
                  <label>Message:</label>
                  <textarea
                    className="home__contact_text-area"
                    name="message"
                    required
                  />
                </div>
                <div className="home__contact_input-group">
                  <label>What Is &radic;4819136400 ?</label>
                  <input
                    type="number"
                    name="name"
                    className="home__contact_input-item"
                    pattern="(69420)$"
                    required
                  />
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="home__contact_input-btn"
                >
                  send message
                </button>
              </form>
            </div>
            <div className="home__contact-wrap_content-wrap_right">
              <div className="home__contact-wrap_content-wrap_right_links">
                <h2>email</h2>
                <a href="mailto:">email here</a>
                <h2>github</h2>
                <a href="">link here</a>
                <h2>LinkedIn</h2>
                <a href="">link here</a>
              </div>
              <div className="home__contact-wrap_content-wrap_right_text">
                <h2>responses</h2>
                <p>
                  please feel free to get in touch via any of the mediums
                  listed.
                  <br />
                  <br />I aim to reply to everyone by the very latest within 2-3
                  business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home__Contact;
