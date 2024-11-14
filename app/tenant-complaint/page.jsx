"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { BaseUrl } from "../utils/BaseUrl";
import { tenantComplaintValidationSchema } from "../utils/validation";
import { showToast } from "../utils/Toast";
import { capitalizeFirstLetter } from "../utils/StringFunctions";

function Page() {
  const [companyList, setCompanyList] = useState([]);
  const [buildingList, setBuildingList] = useState([]);
  const [officeList, setOfficesList] = useState([]); // offices instead of properties

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/companies`);
      setCompanyList(response?.data?.data?.docs ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  const getBuildings = async (company_id) => {
    try {
      const response = await axios.get(
        `${BaseUrl}/building?company_id=${company_id}`
      );
      setBuildingList(response?.data?.data?.docs ?? []);
      console.log(response?.data?.data?.docs, "0000000");
    } catch (err) {
      console.error(err);
    }
  };

  const getOffices = async (company_id) => {
    try {
      const response = await axios.get(
        `${BaseUrl}/offices?company_id=${company_id}`
      );
      console.log("Offices List", response);
      setOfficesList(response?.data?.data?.docs ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      createdByEmail: "",
      createdBy: "",
      createdByContact: "",
      description: "",
      company_id: "",
      building_id: "",
      office_id: "", // changed properties_id to office_id
    },
    validationSchema: tenantComplaintValidationSchema,
    onSubmit: async (values) => {
      try {
        createComplaint(values);
      } catch (error) {
        showToast(error?.response?.data?.message ?? "Something went wrong");
      }
    },
  });

  const createComplaint = async (datas) => {
    datas.status = "submitted";
    datas.work_order = false;
    console.log(datas);
    if (datas?.building_id === "" && datas?.office_id === "") {
      showToast("please choose a building or an office", false);
    } else {
      try {
        const response = await axios.post(`${BaseUrl}/simple-complaint`, datas);
        formik.resetForm({
          values: {
            createdBy: "",
            createdByEmail: "",
            createdByContact: "",
            description: "",
            company_id: "",
            building_id: "",
            office_id: "",
          },
        });

        showToast("Complaint submitted successfully!", true);
      } catch (error) {
        showToast(error?.response?.data?.message ?? "Something went wrong");
      }
    }
  };

  // Handle company selection, fetch corresponding buildings
  const handleCompanyChange = (event) => {
    const selectedCompanyId = event.target.value;
    formik.setFieldValue("company_id", selectedCompanyId);
    setBuildingList([]); // Reset the building list
    setOfficesList([]); // Reset the office list
    if (selectedCompanyId) {
      getBuildings(selectedCompanyId); // Fetch buildings based on selected company
      getOffices(selectedCompanyId);
    }
  };

  // Handle building selection, fetch corresponding offices
  const handleBuildingChange = (event) => {
    const selectedBuildingId = event.target.value;
    formik.setFieldValue("building_id", selectedBuildingId);
    // if (selectedBuildingId && formik.values.company_id) {
    //   getOffices(formik.values.company_id, selectedBuildingId); // Fetch offices based on selected company and building
    // }
  };

  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>JoonMs</title>
        <link rel="icon" href="/images/joon/logo2.png" type="image/x-icon" />
        {/* Include your stylesheets here */}
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link
          href="/css/masterslider/style/masterslider.css"
          rel="stylesheet"
        />
        <link
          href="/css/masterslider/skins/default/style.css"
          rel="stylesheet"
        />
        <link
          href="/css/masterslider/style/ms-partialview.css"
          rel="stylesheet"
        />

        <div className="page-wrapper">
          <Navbar />

          <section className="shop-single-section">
            <div className="auto-container">
              <div className="reviews-comment-section">
                <div className="title-box">
                  <h2>Add Your Complaint</h2>
                  <div
                    style={{
                      color: "#841E9C",
                      paddingTop: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    <span>
                      Please specify the building or office under the real
                      estate company's name.
                      <br />A representative will reach out to verify your
                      details, and appropriate action will be taken promptly.
                    </span>
                  </div>
                  <div className="text">
                    <span>
                      Add your complaint here, and we will fix it soon.
                    </span>
                  </div>
                </div>
                <div className="comment-form">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="createdBy"
                            placeholder="Your Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.createdBy}
                          />
                          {formik.touched.createdBy &&
                          formik.errors.createdBy ? (
                            <span className="text-danger">
                              {formik.errors.createdBy}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="createdByEmail"
                            placeholder="Your Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.createdByEmail}
                          />
                          {formik.touched.createdByEmail &&
                          formik.errors.createdByEmail ? (
                            <span className="text-danger">
                              {formik.errors.createdByEmail}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="createdByContact"
                            placeholder="Your Contact"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.createdByContact}
                          />
                          {formik.touched.createdByContact &&
                          formik.errors.createdByContact ? (
                            <span className="text-danger">
                              {formik.errors.createdByContact}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <select
                            name="company_id"
                            onChange={handleCompanyChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.company_id}
                          >
                            <option value="">Select Company</option>
                            {companyList.map((company) => (
                              <option key={company._id} value={company._id}>
                                {capitalizeFirstLetter(company?.name)} ({" "}
                                <span style={{ color: "blue" }}>
                                  {company?.auto_company_id}
                                </span>{" "}
                                )
                              </option>
                            ))}
                          </select>
                          {formik.touched.company_id &&
                          formik.errors.company_id ? (
                            <span className="text-danger">
                              {formik.errors.company_id}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                          <select
                            name="building_id"
                            onChange={handleBuildingChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.building_id}
                          >
                            <option value="">Select Building</option>
                            {buildingList.map((building) => (
                              <option key={building._id} value={building._id}>
                                {building?.name}
                              </option>
                            ))}
                          </select>
                          {formik.touched.building_id &&
                          formik.errors.building_id ? (
                            <span className="text-danger">
                              {formik.errors.building_id}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <select
                            name="office_id" // Changed to office_id
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.office_id} // Changed to office_id
                          >
                            <option value="">Select Office</option>
                            {officeList.map((office) => (
                              <option key={office._id} value={office._id}>
                                {office?.name}
                              </option>
                            ))}
                          </select>
                          {formik.touched.office_id &&
                          formik.errors.office_id ? (
                            <span className="text-danger">
                              {formik.errors.office_id}
                            </span>
                          ) : null}
                        </div>
                      </div> */}

                      {/* Building Select */}
                      {formik.values.company_id && (
                        <div
                          className="col-12"
                          style={{ textAlign: "center", color: "red" }}
                        >
                          <span>
                            {" "}
                            You can choose either a Building or an Office.{" "}
                          </span>
                        </div>
                      )}

                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <select
                            name="building_id"
                            onChange={handleBuildingChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.building_id}
                            disabled={!formik.values.company_id} // Disable if no company is selected
                          >
                            <option value="">
                              {formik.values.company_id
                                ? "Select Building"
                                : "Please choose a company"}
                            </option>
                            {buildingList.map((building) => (
                              <option key={building._id} value={building._id}>
                                {building?.name}
                              </option>
                            ))}
                          </select>
                          {formik.touched.building_id &&
                          formik.errors.building_id ? (
                            <span className="text-danger">
                              {formik.errors.building_id}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      {/* Office Select */}
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <select
                            name="office_id"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.office_id}
                            disabled={!formik.values.company_id} // Disable if no company is selected
                          >
                            <option value="">
                              {formik.values.company_id
                                ? "Select Office"
                                : "Please choose a company"}
                            </option>
                            {officeList.map((office) => (
                              <option key={office._id} value={office._id}>
                                {office?.name}
                              </option>
                            ))}
                          </select>
                          {formik.touched.office_id &&
                          formik.errors.office_id ? (
                            <span className="text-danger">
                              {formik.errors.office_id}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            name="description"
                            placeholder="Your Complaint"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                          />
                          {formik.touched.description &&
                          formik.errors.description ? (
                            <span className="text-danger">
                              {formik.errors.description}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div
                      className="form-group text-center"
                      style={{ float: "right" }}
                    >
                      <button
                        className="theme-btn btn-style-fifteen"
                        type="submit"
                        disabled={formik.isSubmitting}
                      >
                        {formik.isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>

        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-angle-up" />
        </div>

        <Script src="/js/jquery.js" />
        <Script src="/js/popper.min.js" />
        <Script src="/js/jquery-ui.js" />
        <Script src="/js/bootstrap.min.js" />
        <Script src="/js/jquery.paroller.min.js" />
        <Script src="/js/jquery.easing.min.js" />
        <Script src="/js/masterslider.js" />
        <Script src="/js/jquery.fancybox.js" />
        <Script src="/js/owl.js" />
        <Script src="/js/element-in-view.js" />
        <Script src="/js/parallax.min.js" />
        <Script src="/js/wow.js" />
        <Script src="/js/appear.js" />
      </>
    </div>
  );
}

export default Page;
