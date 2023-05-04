import React from "react";
export default function Experience(props) {
  // let resumeData = this.props.resumeData;
  return (
    <section id="experience">
      {/* <div data-aos="zoom-in-down">Educação</div> */}
      <div className="row-col">
        <div className="col-sm-4">
          <div data-aos="fade-down-right">
            <div className="card">
              <img className="card-image" src="images/profilepic.jpg" alt="" />
              <h3 className="card-title">Unidep </h3>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div data-aos="fade-down-right">
            <div className="card">
              <img className="card-image" src="images/profilepic.jpg" alt="" />
              <h3 className="card-title">Unyleia </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
