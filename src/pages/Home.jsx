import React from "react";
import man from "../../public/Home/man.png";
import code from "../../public/Home/code.png";
import carpet from "../../public/Home/carpet.png";
import bin from "../../public/Home/bin.png";
import desktop from "../../public/Home/desktop.png";
import keyboard from "../../public/Home/keyboard.png";
import table from "../../public/Home/table.png";
import shape1 from "../../public/shapes/shape1.png";
import shape2 from "../../public/shapes/shape2.svg";
import monitor from "../../public/Home/big-monitor.png"
import creative from "../../public/Home/creative.png"
import developer from "../../public/Home/developer.png"
import flower from "../../public/Home/flower.png"
import dot from "../../public/Home/dot.png"
import flowertop from "../../public/Home/flower-top.png"
import flowertopbig from "../../public/Home/flower-top-big.png"
import pen from "../../public/Home/pen.png"
import book from "../../public/Home/book.png"
import teacup from "../../public/Home/tea-cup.png"
import headphone from "../../public/Home/headphone.png"
import smallMonitor from "../../public/Home/small-monitor.png"
import table2 from "../../public/Home/table2.png"
import circle from "../../public/Home/circle.png"
import "./Home.css";
function Home() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="main-banner">



<div className="main-banner-row">
  <div className="main-banner-col1">
  <div class="hero-content">
                      <h1 class="aos-init aos-animate">
                        IT Management Service & Support for Your Business.
                      </h1>
                      <p class="aos-init aos-animate">
                        Great Innovations Ahead..!
                        <br />A company with a vision to innovate, build and
                        deliver amazing software solutions.
                      </p>
                    </div>
  </div>
  <div className="main-banner-col2">
  <div class="banner-image">
                    <img
                      src={man}
                      width="371"
                      height="400"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={code}
                      width="174"
                      height="111"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={carpet}
                      width="510"
                      height="293"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img
                      src={bin}
                      width="86"
                      height="112"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img alt="book" loading="lazy" width="78" height="74" decoding="async" data-nimg="1" class="animate__animated animate__bounceIn animate__delay-0.1s" src={book}/>
                    <img
                      src={desktop}
                      width="105"
                      height="147"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img alt="dot" loading="lazy" width="94" height="70" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s"  src={dot}/>
          
          <img alt="flower-top-big" loading="lazy" width="78" height="291" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1s"  src={flowertopbig}/>
          <img alt="flower-top" loading="lazy" width="53" height="87" decoding="async" data-nimg="1" class="animate__animated animate__rotateIn animate__delay-0.1s"  src={flowertop}/>
                    <img
                      src={keyboard}
                      width="121"
                      height="73"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img alt="pen" loading="lazy" width="42" height="77" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" src={pen}/>
                    <img
                      src={table}
                      width="380"
                      height="342"
                      class="animate__animated animate__fadeInDown animate__delay-0.1s"
                    />
                    <img alt="tea-cup" loading="lazy" width="44" height="104" decoding="async" data-nimg="1" class="animate__animated animate__fadeInLeft animate__delay-0.1s" src={teacup}/>
          <img alt="headphone" loading="lazy" width="62" height="62" decoding="async" data-nimg="1" class="animate__animated animate__rollIn animate__delay-0.1" src={headphone}/>
                    
                    
                    
                    {/* <img alt="man" loading="lazy" width="371" height="400" decoding="async" data-nimg="1" class="animate__animated animate__fadeInDown animate__delay-0.1s" style="color:transparent" src={man}/> */}
                    {/*<img alt="code" loading="lazy" width="174" height="111" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1s" style="color:transparent" src="/_next/static/media/code.82d4b3f4.png">
          <img alt="carpet" loading="lazy" width="510" height="293" decoding="async" data-nimg="1" class="animate__animated animate__fadeInLeft animate__delay-0.1s" style="color:transparent" src="/_next/static/media/carpet.d8796c37.png">
          <img alt="bin" loading="lazy" width="86" height="112" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/bin.60ce7b76.png">
          <img alt="book" loading="lazy" width="78" height="74" decoding="async" data-nimg="1" class="animate__animated animate__bounceIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/book.11c1c4b9.png">
          <img alt="dekstop" loading="lazy" width="105" height="147" decoding="async" data-nimg="1" class="animate__animated animate__fadeInDown animate__delay-0.1s" style="color:transparent" src="/_next/static/media/dekstop.2c917b9e.png">
          <img alt="dot" loading="lazy" width="94" height="70" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/dot.ee19ae91.png">
          
          <img alt="flower-top-big" loading="lazy" width="78" height="291" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1s" style="color:transparent" src="/_next/static/media/flower-top-big.bbfe9272.png">
          <img alt="flower-top" loading="lazy" width="53" height="87" decoding="async" data-nimg="1" class="animate__animated animate__rotateIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/flower-top.20c351ba.png">
          <img alt="keyboard" loading="lazy" width="121" height="73" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1s" style="color:transparent" src="/_next/static/media/keyboard.7abcad8f.png">
          <img alt="pen" loading="lazy" width="42" height="77" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/pen.2ff0aba4.png">
          <img alt="table" loading="lazy" width="380" height="342" decoding="async" data-nimg="1" class="animate__animated animate__zoomIn animate__delay-0.1s" style="color:transparent" src="/_next/static/media/table.45335d41.png">
          <img alt="tea-cup" loading="lazy" width="44" height="104" decoding="async" data-nimg="1" class="animate__animated animate__fadeInLeft animate__delay-0.1s" style="color:transparent" src="/_next/static/media/tea-cup.6956e3ff.png">
          <img alt="headphone" loading="lazy" width="62" height="62" decoding="async" data-nimg="1" class="animate__animated animate__rollIn animate__delay-0.1" style="color:transparent" src="/_next/static/media/headphone.60a2794c.png">
          <img alt="main-pic" loading="lazy" width="580" height="560" decoding="async" data-nimg="1" class="animate__animated animate__fadeInUp animate__delay-0.1" style="color:transparent" src="/_next/static/media/main-pic.52b102d9.png"> */}
                  </div>
  </div>
</div>












          {/* <div className="d-table">
            <div className="d-table-cell">
              <div class="container">
                <div class="row h-100 justify-content-center align-items-center">
                  <div class="col-lg-5">
                    <div class="hero-content">
                      <h1 class="aos-init aos-animate">
                        IT Management Service & Support for Your Business.
                      </h1>
                      <p class="aos-init aos-animate">
                        Great Innovations Ahead..!
                        <br />A company with a vision to innovate, build and
                        deliver amazing software solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                 
                </div>
              </div>
            </div>
          </div> */}






        </div>
        <div class="shape1">
          <img alt="shape" width="202" height="202" src={shape1} />
        </div>
        <div class="shape2 rotateme">
          <img alt="shape" width="22" height="22" src={shape2} />
        </div>



{/* ************************************************************************* */}
<div className="boxes-area2">
  <div className="box-col">
  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="2"
                        y="14"
                        width="20"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 >
                    <a  >
                      Software Development
                    </a>
                  </h3>
                  <p>
                    We provide expertise in full front to back programme
                    delivery using Scrum, Lean, Agile and Hybrid methodologies.
                    We establish processes and a structure for communication and
                    implementation.
                  </p>
  </div>
  <div className="box-col bg-f78acb">
  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Resource Hiring & Outsourcing
                    </a>
                  </h3>
                  <p>
                    Technology expertise coupled with award-winning UX skills is
                    what makes us the leading web development company in India -
                    and helps us build world class websites and web
                    applications.
                  </p>
  </div>
  <div className="box-col bg-c679e3">
  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      PR & Brand Management
                    </a>
                  </h3>
                  <p>
                    SEO, SEM, PPC, SMO, Content marketing and social media
                    networking, etc. comprise a perfect digital marketing
                    strategy. We offer unique digital marketing solutions that'd
                    load your inbox with inquiries.
                  </p>
  </div>
  <div className="box-col bg-eb6b3d">
  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="6" y1="3" x2="6" y2="15"></line>
                      <circle cx="18" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M18 9a9 9 0 0 1-9 9"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Training & Placement
                    </a>
                  </h3>
                  <p>
                    {/* Any part of a design that affects the user is UX design. At
                    StackMentalist, we offer mobile UX design, UX design for
                    SAAS, Product UX design for startups and more, while
                    ensuring that the end user enjoys a great value-added
                    experience. */}
                   
Any part of a design that affects the user is UX design. At StackMentalist, we offer mobile, SAAS, and product UX design for startups, ensuring a valuable user experience.
                  </p>
  </div>
</div>

{/* ************************************************************************* */}
        {/* <div class="boxes-area">
          <div class="container2">
            <div class="row2 justify-content-center">
              <div
                class="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="single-box">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        x="2"
                        y="14"
                        width="20"
                        height="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 >
                    <a  >
                      Software Development
                    </a>
                  </h3>
                  <p>
                    We provide expertise in full front to back programme
                    delivery using Scrum, Lean, Agile and Hybrid methodologies.
                    We establish processes and a structure for communication and
                    implementation.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="single-box bg-f78acb">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Resource Hiring & Outsourcing
                    </a>
                  </h3>
                  <p>
                    Technology expertise coupled with award-winning UX skills is
                    what makes us the leading web development company in India -
                    and helps us build world class websites and web
                    applications.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="single-box bg-c679e3">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      PR & Brand Management
                    </a>
                  </h3>
                  <p>
                    SEO, SEM, PPC, SMO, Content marketing and social media
                    networking, etc. comprise a perfect digital marketing
                    strategy. We offer unique digital marketing solutions that'd
                    load your inbox with inquiries.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div class="single-box bg-eb6b3d">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="6" y1="3" x2="6" y2="15"></line>
                      <circle cx="18" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M18 9a9 9 0 0 1-9 9"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Training & Placement
                    </a>
                  </h3>
                  <p>
                    Any part of a design that affects the user is UX design. At
                    StackMentalist, we offer mobile UX design, UX design for
                    SAAS, Product UX design for startups and more, while
                    ensuring that the end user enjoys a great value-added
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* ************************************************************************* */}

        <div class="features-area pt-80 pb-50 bg-f7fafd">
          <div class="container4">
            <div class="section-title">
              <h2>About Stackmentalist</h2>
              <div class="bar"></div>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>

            <div className="row4">
              <div class="col-lg-66 col-md-66">
                <div
                  class="single-features aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Innovation-driven Solutions
                    </a>
                  </h3>
                  <p>
                    StackMentalist is committed to staying at the forefront of
                    technological innovation. We continually explore emerging
                    technologies and methodologies to ensure that our clients
                    receive solutions that are not only current but also
                    future-proof.
                  </p>
                </div>
                <div
                  class="single-features aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div class="icon bg-c679e3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Customer-Centric Approach
                    </a>
                  </h3>
                  <p>
                    Our approach revolves around understanding the unique needs
                    and challenges of each client. By prioritizing customer
                    satisfaction and actively listening to feedback, we tailor
                    our solutions to exceed expectations and deliver tangible
                    results.
                  </p>
                </div>
                <div
                  class="single-features aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div class="icon bg-eb6b3d">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">Expert Team</a>
                  </h3>
                  <p>
                    At StackMentalist, we pride ourselves on our team of experts
                    who bring diverse skills and experiences to the table. From
                    seasoned developers to creative designers and strategic
                    consultants, we have the talent pool to tackle projects of
                    any scale or complexity.
                  </p>
                </div>
              </div>

              <div class="col-lg-66 col-md-66">
                <div
                  class="single-features aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Commitment to Quality
                    </a>
                  </h3>
                  <p>
                    Quality is ingrained in everything we do. We adhere to
                    rigorous quality standards throughout the development
                    lifecycle, ensuring that our solutions are robust, scalable,
                    and maintainable in the long run.
                  </p>
                </div>
                <div
                  class="single-features aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div class="icon bg-c679e3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Transparent Communication
                    </a>
                  </h3>
                  <p>
                    We believe in fostering open and transparent communication
                    with our clients at every stage of the project. From initial
                    discussions to regular progress updates and post-launch
                    support, we keep our clients informed and involved every
                    step of the way.
                  </p>
                </div>
                <div
                  class="single-features aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div class="icon bg-eb6b3d">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                  <h3>
                    <a href="/features/feature-details/">
                      Global Reach, Local Presence
                    </a>
                  </h3>
                  <p>
                    While we have a global footprint with clients spanning
                    across various industries and geographies, we maintain a
                    strong local presence to better understand regional nuances
                    and provide personalized support to our clients.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* ******************************************************************************* */}

        {/* why are we different */}

        




<div className="main" >
  <div className="col1 services-left-image2">
    {/* <div class="col-lg-6 col-md-12 services-left-image"> */}
                <img alt="big-monitor" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" loading="lazy" width="252" height="149" decoding="async" data-nimg="1"  src={monitor} class="aos-init aos-animate"/>
                <img alt="creative" data-aos="fade-up" data-aos-delay="150" data-aos-duration="500" data-aos-once="true" loading="lazy" width="88" height="94" decoding="async" data-nimg="1" src={creative} class="aos-init aos-animate"/>
                <img alt="developer" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-once="true" loading="lazy" width="149" height="230" decoding="async" data-nimg="1" src={developer} class="aos-init aos-animate"/>
                <img data-wow-delay="0.6s" alt="flower-top" data-aos="fade-up" data-aos-delay="250" data-aos-duration="500" data-aos-once="true" loading="lazy" width="127" height="203" decoding="async" data-nimg="1" src={flower} class="aos-init aos-animate"/>
                <img alt="small-monitor" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true" loading="lazy" width="109" height="106" decoding="async" data-nimg="1" src={smallMonitor} class="aos-init aos-animate"/>
                {/* <img alt="small-top" data-aos="fade-up" data-aos-delay="350" data-aos-duration="500" data-aos-once="true" loading="lazy" width="56" height="82" decoding="async" data-nimg="1" src="/_next/static/media/small-top.509c69c5.png" class="aos-init aos-animate"/> */}
                <img alt="table" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-once="true" loading="lazy" width="337" height="138" decoding="async" data-nimg="1" src={table2} class="aos-init aos-animate"/>
                {/* <img alt="target" data-aos="fade-up" data-aos-delay="450" data-aos-duration="500" data-aos-once="true" loading="lazy" width="91" height="96" decoding="async" data-nimg="1" src="/_next/static/media/target.65f374e8.png" class="aos-init aos-animate"/> */}
            
            <img alt="shape" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" data-aos-once="true" loading="lazy" width="524" height="518" decoding="async" data-nimg="1" class="bg-image rotateme aos-init aos-animate" src={circle}/>
        {/*<img alt="main-pic" data-aos="fade-up" data-aos-delay="550" data-aos-duration="500" data-aos-once="true" loading="lazy" width="418" height="378" decoding="async" data-nimg="1" src="/_next/static/media/service-left-main-pic.62057aa2.png" class="aos-init aos-animate"/> */}
              {/* </div> */}
  </div>
  <div className="col2">
              {/* <div className="head"> */}
              <div class="section-title">
                  <h2>Why we are different</h2>
                  <div class="bar"></div>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              {/* </div> */}
              <div className="points">

                <div className="points-col1">

                <div class="box2">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>{" "}
                Innovative Approach
                    </div>
                    <div class="box2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>{" "}
                      Client-Centric Focus
                    </div>
                    <div class="box2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>{" "}
                      Cutting-Edge Technologies
                    </div>

                </div>
                <div className="points-col2">
                <div class="box2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>{" "}
                      Agile Development Methodology
                    </div>

                    <div class="box2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>{" "}
                      Robust Support and Maintenance
                    </div>
                    <div class="box2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>{" "}
                      Transparent Communication
                    </div>
                </div>
              </div>
  </div>
</div>


















        {/* ************************************************* */}
      </div>
    </>
  );
}

export default Home;
