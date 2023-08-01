import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg ">
        <div className="container pt-3">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  PAGES
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active " href="/">
                  SHOP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  CONTACT
                </a>
              </li>
            </ul>
            <form className="d-flex mx-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Keywords"
                aria-label="Search"
              />
            </form>
            <button type="button" className="btn-nav btn-primary position-relative">
              <span className="heading-nav-btn  position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                0<span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <button type="button" className="btn-nav btn-primary position-relative mx-3">
              <span className="heading-nav-btn position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                0<span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
