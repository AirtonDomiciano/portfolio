import React from "react";
import TypeWrite from "../../util/typeWrite";
import "./header.css";

export function Header(props) {
  const { name, roleDescription, role, socialLinks } = props.resumeData;
  return (
    <>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Inicio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                Quem sou
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Expêriencias
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Trabalhos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Certificados
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h2 className="my-name">{name}</h2>

            <h3 className="responsive-headline">
              <TypeWrite
                text={"Sou Desenvolvedor Front-End"}
                isTime="0"
                time="200"
              />
            </h3>
            <h2
              style={{ color: "#fff", fontFamily: "sans-serif " }}
              className="responsive-headline-sub"
            >
              {role}
            </h2>
            {/* <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              <br></br>
             <TypeWrite text={roleDescription} isTime="1000" />
            </h3> */}
            <hr />
            <ul className="social">
              {socialLinks &&
                socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </>
  );
}
