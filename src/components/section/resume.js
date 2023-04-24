import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div data-aos="zoom-in-down">Educação</div>
        <div className="row-col">
          <div className="col-sm-4">
            <div data-aos="fade-up-right">Unidep</div>
          </div>
          <div className="col-sm-4">
            <div data-aos="fade-down-right">
              <div className="card">
                <img
                  className="card-image"
                  src="images/profilepic.jpg"
                  alt=""
                />
                <h3 className="card-title">Unyleia </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
