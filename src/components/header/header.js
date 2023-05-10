import React from "react";

export function Header(props) {
  const { name, socialLinks } = props.resumeData;
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
                Sobre
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#experience">
                Ensinos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#work">
                Serviços
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#certificates">
                Certificados
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contato
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <div className="">
              <h1>{name}</h1>
            </div>
            <div className="row">
              <div className="frase">
                <h3>Sou Desenvolvedor</h3>
                <h3 id="souDesenvolvedor"></h3>
              </div>
            </div>
            <div className="row">
              <hr />
            </div>
            <div className="">
              <ul className="social">
                {socialLinks &&
                  socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" rel="noreferrer">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
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
