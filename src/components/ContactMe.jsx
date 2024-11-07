import React from "react";

const ContactMe = () => {
  return (
    <div>
      <div id="contact" className="contactside">
        <div className="cf_up">
          <h5>Get In Touch</h5>
          <h3>Contact me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <form action="" className="contact_form">
            <div className="confirlas">
              <div className="cf_firstname">
                <label htmlFor="">First Name</label>
                <input type="text" />
              </div>
              {/* ==================== */}
              <div className="cf_firstname">
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
            </div>
            {/* ===================== */}

            <div className="confirlas">
              <div className="cf_firstname">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              {/* ===================== */}
              <div className="cf_firstname">
                <label htmlFor="">Phone Number</label>
                <input type="tel" />
              </div>
            </div>
            {/* ========================= */}

            <div className="cf_textarea">
              <label htmlFor="">Message</label>
              <textarea
                id="description"
                cols="30"
                rows="8"
                name=""
                placeholder="Type your message..."
              ></textarea>
            </div>

            {/* ========================= */}
            <div class="check">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label htmlFor="checkbox">I accept the terms</label>
            </div>

            {/* =========================== */}

            <div className="submit">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
