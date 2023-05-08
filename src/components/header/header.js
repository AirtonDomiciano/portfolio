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
                Quem sou
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#experience">
                Expêriencias
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#work">
                Trabalhos
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
              <h2>{name}</h2>
              <h3 className="frase">
                <div className="frase">
                  <p>Sou Desenvolvedor :</p>
                  <span id="souDesenvolvedor"></span>
                </div>
              </h3>

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
