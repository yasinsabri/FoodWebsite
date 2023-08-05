import React from "react";

const Blog = () => {
  return (
    <React.Fragment>
      <div className="container-fluid item-bg">
        <div className="container pb-5">
          <div className="row pt-5">
            <div className="blog-heading text-center ">
              <h5>RECENT ARTICLE</h5>
              <h1>LATEST NEWS & BLOG</h1>
            </div>
            <div className="col-sm-4 pt-5">
              <div className="card card-blog pt-3">
                <h6>JAN 15,2022</h6>
                <h4>BEST BURGER IN TOWN....</h4>
                <img src="assets/blog-img1.png" alt="" className="pt-3 w-100" />
                <a
                  href="/"
                  target="_blank"
                  className="pt-1"
                  rel="noopener noreferrer"
                >
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-sm-4 pt-5">
              <div className="card card-blog pt-3">
                <h6>JAN 15,2022</h6>
                <h4>BEST BURGER IN TOWN....</h4>
                <img src="assets/blog-img2.png" alt="" className="pt-3 w-100" />
                <a
                  href="/"
                  target="_blank"
                  className="pt-2"
                  rel="noopener noreferrer"
                >
                  READ MORE
                </a>
              </div>
            </div>
            <div className="col-sm-4 pt-5">
              <div className="card card-blog pt-3">
                <h6>JAN 15,2022</h6>
                <h4>BEST BURGER IN TOWN....</h4>
                <img src="assets/blog-img3.png" alt="" className="pt-3 w-100" />
                <a
                  href="/"
                  target="_blank"
                  className="pt-5"
                  rel="noopener noreferrer"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className="blog-btn pt-5 text-center ">
            <button>READ MORE BLOGS</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
