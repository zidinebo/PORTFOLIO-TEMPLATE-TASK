import React from "react";
import star from "../images/star.png";
import avatar1 from "../images/Avatar Image.png";
import avatar2 from "../images/Avatar Image (1).png";
import avatar3 from "../images/Avatar Image (2).png";

const Testimonials = () => {
  return (
    <div>
      <div id="testimonials" className="testimony">
        <div className="testi_upper">
          <h5>Clients Feedback</h5>
          <h2>Customer testimonials</h2>
        </div>
        {/* ====================================== */}
        <div className="testi_lower">
          <div className="testeachgrid">
            <div className="starr">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="testupp">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="testipro">
              <img src={avatar1} alt="profilepic" />
              <div className="testiname">
                <h4>Dianne Russell</h4>
                <p>Starbucks</p>
              </div>
            </div>
          </div>
          {/* ======================== */}
          <div className="testeachgrid">
            <div className="starr">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="testupp">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="testipro">
              <img src={avatar2} alt="profilepic" />
              <div className="testiname">
                <h4>Kristin Watson</h4>
                <p>Louis Vuitton</p>
              </div>
            </div>
          </div>
          {/* ========================= */}
          <div className="testeachgrid">
            <div className="starr">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="testupp">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare."
            </p>
            <div className="testipro">
              <img src={avatar3} alt="profilepic" />
              <div className="testiname">
                <h4>Kathryn Murphy</h4>
                <p>McDonald's</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
