import React from "react";

function NewsSection() {
  return (
    <div>
      <section className="news-section">
        <div className="auto-container">
          <div
            className="icon-one"
            style={{ backgroundImage: "url(images/icons/icon-14.png)" }}
          />

          <div className="sec-title centered">
            <h2>Our Latest News</h2>
            <div className="text">
              Our Latest Blogs and Artical For Our Clients
            </div>
          </div>
          <div className="row clearfix">
            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <h3>
                  <a href="blog-detail.html">
                    We often find it is difficult Resolve the problem.
                  </a>
                </h3>
                <div className="text">
                  Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit
                  animal iracundia. Ius te altera essent incorrupte. Id alien
                  accu consetetur eam.
                </div>
                <div className="lower-box">
                  <div className="box-inner">
                    <div className="post-info">
                      June 29, 2018. <strong>By: Joni Monika</strong>{" "}
                      <span className="author-image">
                        <img src="images/resource/author-5.jpg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <h3>
                  <a href="blog-detail.html">
                    Internet Advertising for every Customer company.
                  </a>
                </h3>
                <div className="text">
                  Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit
                  animal iracundia. Ius te altera essent incorrupte. Id alien
                  accu consetetur eam.
                </div>
                <div className="lower-box">
                  <div className="box-inner">
                    <div className="post-info">
                      June 29, 2018. <strong>By: Joni Monika</strong>{" "}
                      <span className="author-image">
                        <img src="images/resource/author-5.jpg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <h3>
                  <a href="blog-detail.html">
                    Right now For the Decent fact for the customer rong.
                  </a>
                </h3>
                <div className="text">
                  Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit
                  animal iracundia. Ius te altera essent incorrupte. Id alien
                  accu consetetur eam.
                </div>
                <div className="lower-box">
                  <div className="box-inner">
                    <div className="post-info">
                      June 29, 2018. <strong>By: Joni Monika</strong>{" "}
                      <span className="author-image">
                        <img src="images/resource/author-5.jpg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsSection;
