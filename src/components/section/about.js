import React from "react";
export default function About(props) {
  let { aboutme } = props.resumeData;

  return (
    <section id="about">
      <div className="row">
        <div data-aos="zoom-in">
          <div className="row-col">
            <div className="col-sm-3">
              <div className="card">
                <img
                  className="card-image"
                  src="images/profilepic.jpg"
                  alt=""
                />
                <h3 className="card-title"> </h3>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="sobre-mim">
                <ul>
                  {aboutme &&
                    aboutme.map((item) => {
                      return (
                        <li key={item.title}>
                          <h2>{item.title}:</h2>
                          <p>{item.context}</p>
                          {item.resume ? <p>{item.resume}</p> : '' }
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
