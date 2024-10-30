// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Carousel } from "primereact/carousel";
// import { BaseUrl } from "@/app/utils/BaseUrl";
// const responsiveOptions = [
//   {
//     breakpoint: "1400px",
//     numVisible: 3,
//     numScroll: 1,
//   },
//   {
//     breakpoint: "1199px",
//     numVisible: 1,
//     numScroll: 1,
//   },
//   {
//     breakpoint: "767px",
//     numVisible: 2,
//     numScroll: 1,
//   },
//   {
//     breakpoint: "575px",
//     numVisible: 1,
//     numScroll: 1,
//   },
// ];
// function PricingSection() {
//   const onPurchaseClicked = (planId) => {
//     const isLogedIn = localStorage.getItem("token") ? true : false;
//     if (!isLogedIn) {
//       window.location.href = "/login";
//     } else {
//       window.location.href = `/purchase-plan/${planId}`;
//     }
//   };

//   const productTemplate = (product) => {
//     return (
//       <>
//         {/* <div className="price-block style-two">
//         <div className="inner-box">
//           <div className="line-one" />
//           <div className="line-two" />
//           <div className="icon-box">
//             <span
//               className="icon fas fa-credit-card"
//               style={{ fontSize: "45px" }}
//             />
//           </div>

//           <h3>{product?.name}</h3>
//           <ul className="price-list">
//             <li>{product?.validity_days} days validity</li>
//             <li>{product?.users_allowed} users allowed</li>
//             <li>{product?.voices_allowed} voices allowed</li>
//             <li>{product?.pics_allowed} pics allowed</li>
//             <li>{product?.backup_days} days backup</li>
//           </ul>
//           <div className="price">
//             {product.subtype_Id.per_user_amt * product.users_allowed +
//               product.subtype_Id.per_day_backup_amt * product.backup_days}
//             .00 <sub> AED </sub>
//           </div>
//           <a
//             href={undefined}
//             onClick={() => onPurchaseClicked(product?._id)}
//             className="theme-btn btn-alternate"
//           >
//             <span
//               className="txt"
//               style={{ fontWeight: "bolder", color: "white" }}
//             >
//               Purchase
//             </span>
//           </a>
//         </div>
//       </div> */}
//         <div
//           className="price-block style-two"
//           style={{
//             position: "relative",
//           }}
//         >
//           <div className="inner-box">
//             {/* Custom Label on the top-right */}
//             {product?.companies?.length ? (
//               <div
//                 className="custom-label"
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   right: "10px",
//                   backgroundColor: "#371742", // Customize the background color
//                   color: "white",
//                   padding: "5px 10px",
//                   borderRadius: "5px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Custom Offer
//               </div>
//             ) : (
//               ""
//             )}

//             <div className="line-one" />
//             <div className="line-two" />
//             <div className="icon-box">
//               <span
//                 className="icon fas fa-credit-card"
//                 style={{ fontSize: "45px" }}
//               />
//             </div>

//             <h3>{product?.name}</h3>
//             <ul className="price-list">
//               <li>{product?.validity_days} days validity</li>
//               <li>{product?.users_allowed} users allowed</li>
//               <li>{product?.voices_allowed} voices allowed</li>
//               <li>{product?.pics_allowed} pics allowed</li>
//               <li>{product?.backup_days} days backup</li>
//             </ul>
//             <div className="price">
//               {product.subtype_Id.per_user_amt * product.users_allowed +
//                 product.subtype_Id.per_day_backup_amt * product.backup_days}
//               .00 <sub> AED </sub>
//             </div>
//             <a
//               href={undefined}
//               onClick={() => onPurchaseClicked(product?._id)}
//               className="theme-btn btn-alternate"
//             >
//               <span
//                 className="txt"
//                 style={{ fontWeight: "bolder", color: "white" }}
//               >
//                 Purchase
//               </span>
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   };
//   const [pricingData, setPricingData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Replace the URL with the API endpoint you want to fetch data from
//     axios
//       .get(`${BaseUrl}/subscriptions`, {
//         headers: {
//           Authorization: localStorage.getItem("token")
//             ? `Bearer ${localStorage.getItem("token")}`
//             : null,
//         },
//       })
//       .then((response) => {
//         console.log("THE RESPONSE IS", response?.data?.data?.docs);
//         setPricingData(response?.data?.data?.docs ?? []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <section className="services-section-two" style={{ marginTop: "-100px" }}>
//         {/* Pattern Layer */}
//         <div
//           className="pattern-layer"
//           style={{ backgroundImage: "url(images/background/pattern-7.png)" }}
//         />
//         <div className="auto-container">
//           {/* Sec Title Two */}
//           <div className="sec-title-two centered">
//             <h2>Pricing Plans</h2>
//             <div className="title-text">
//               We Are Specialized in the Following Plans
//             </div>
//           </div>

//           {pricingData?.length ? (
//             <div
//               className="carousel-container"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 overflow: "hidden",
//                 // width: "100%",
//               }}
//             >
//               <Carousel
//                 value={pricingData}
//                 numVisible={2}
//                 autoplayInterval={3000}
//                 circular
//                 numScroll={1}
//                 responsiveOptions={responsiveOptions}
//                 itemTemplate={productTemplate}
//               />
//             </div>
//           ) : (
//             <h1
//               style={{
//                 textAlign: "center",
//                 color: "black",
//               }}
//             >
//               {" "}
//               No Pricing Plans Available
//             </h1>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default PricingSection;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BaseUrl } from "@/app/utils/BaseUrl";

const PricingSection = () => {
  const [isLogedIn, setisLogedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [pricingData, setPricingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPricingData = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/subscriptions`, {
        headers: {
          Authorization: localStorage.getItem("token")
            ? `Bearer ${localStorage.getItem("token")}`
            : null,
        },
      });
      const uniqueData = response.data.data.docs ?? []; // Assuming the API data structure
      setPricingData(uniqueData);
    } catch (error) {
      setError("Failed to fetch pricing plans");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPricingData();
  }, []);

  const onPurchaseClicked = (planId) => {
    const isLoggedIn = Boolean(localStorage.getItem("token"));
    if (!isLoggedIn) {
      window.location.href = "/login";
    } else {
      window.location.href = `/purchase-plan/${planId}`;
    }
  };

  const settings = {
    dots: true,
    infinite: false, // Set to false to avoid infinite loop of the same data
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderPriceBlock = (product) => (
    <div className="price-block" key={product._id}>
      <div className="inner-box">
        {product?.companies?.length ? (
          <div
            className="custom-label"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#371742", // Customize the background color
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Custom Offer
          </div>
        ) : (
          ""
        )}

        <div className="line-one" />
        <div className="line-two" />
        <div className="icon-box">
          <span className="icon flaticon-send" />
        </div>
        <h3>{product?.name}</h3>
        <ul className="price-list">
          <li>{product?.validity_days} days validity</li>
          <li>{product?.users_allowed} users allowed</li>
          <li>{product?.voices_allowed} voices allowed</li>
          <li>{product?.pics_allowed} pics allowed</li>
          <li>{product?.backup_days} days backup</li>
        </ul>
        <div className="price">
          {product?.subtype_Id.per_user_amt * product?.users_allowed +
            product?.subtype_Id.per_day_backup_amt * product?.backup_days}
          .00 <sub>AED</sub>
        </div>
        <button
          onClick={() => onPurchaseClicked(product._id)}
          className="theme-btn btn-style-four"
        >
          <span className="txt">Purchase</span>
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <section className="pricing-section">
        <div
          className="icon-one"
          style={{ backgroundImage: "url(images/icons/icon-16.png)" }}
        />
        <div
          className="icon-three"
          style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
        />
        <div
          className="icon-four"
          style={{ backgroundImage: "url(images/icons/icon-16.png)" }}
        />
        <div className="auto-container">
          <div
            className="icon-two"
            style={{ backgroundImage: "url(images/icons/icon-14.png)" }}
          />
          <div className="outer-container pricing-tabs tabs-box">
            <div className="clearfix">
              <div className="title-column">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>Pricing Plans</h2>
                    {/* <div className="text">
                      ok
                    </div> */}
                  </div>
                  <div className="title-text">
                    No credit card or account information is required for the
                    Trial Plan purchase, while other exclusive plans are
                    available for your convenience.
                  </div>
                  {!isLogedIn && (
                    <div className="title-text" style={{ color: "red" }}>
                      Please log in to explore your customized plan.
                    </div>
                  )}
                </div>
              </div>
              <div className="price-column">
                <div className="inner-column">
                  {loading ? (
                    <p>Loading plans...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : pricingData.length ? (
                    <Slider {...settings}>
                      {pricingData.map((product) => renderPriceBlock(product))}
                    </Slider>
                  ) : (
                    <h1>No Pricing Plans Available</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
