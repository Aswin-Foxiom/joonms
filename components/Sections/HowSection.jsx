import { BaseUrl } from "@/app/utils/BaseUrl";
import { showToast } from "@/app/utils/Toast";
import { contactValidationSchema } from "@/app/utils/validation";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

function HowSection() {
  const [loading, setLoading] = useState(false);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      company_name: "",
      email: "",
      contact_number: "",
      comment: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values) => {
      applyData(values);
    },
  });

  const applyData = (values) => {
    console.log(values);
    setLoading(true);
    const data = {
      name: values?.name,
      companyName: values?.company_name,
      email: values?.email,
      mobile: values?.contact_number,
      message: values?.comment,
    };
    axios
      .post(`${BaseUrl}/users/contact-us`, data)
      .then((res) => {
        showToast(
          "Thank you for reaching out! We will get back to you soon.",
          true
        );
      })
      .catch((error) => {
        showToast("Something went wrong.Please try again", false);
      })
      .finally(() => {
        setLoading(false);
        formik.resetForm();
      });
  };
  return (
    <div id="contact-us">
      <section className="contact-page-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Map Column */}
            <div className="map-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <img src="/whaticon/contactus.jpg" />
              </div>
            </div>
            {/* Form Column */}
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Contact Us</h2>
                <div className="text">
                  {/* Print this page to PDF for the complete set of vectors. Or to
                  use on the desktop, install FontAwesome. */}
                </div>
                {/* Contact Form */}
                <div className="contact-form">
                  <form onSubmit={formik.handleSubmit} id="contact-form">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          placeholder="Name"
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <span className="text-danger text-small">
                            {formik.errors.name}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="company_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.company_name}
                          placeholder="Company Name"
                        />
                        {formik.touched.company_name &&
                        formik.errors.company_name ? (
                          <span className="text-danger text-small">
                            {formik.errors.company_name}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          placeholder="Email"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <span className="text-danger text-small">
                            {formik.errors.email}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="contact_number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.contact_number}
                          placeholder="Contact Number"
                        />
                        {formik.touched.contact_number &&
                        formik.errors.contact_number ? (
                          <span className="text-danger text-small">
                            {formik.errors.contact_number}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="comment"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.comment}
                          placeholder="Comment"
                        />
                        {formik.touched.comment && formik.errors.comment ? (
                          <span className="text-danger text-small">
                            {formik.errors.comment}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        {loading ? (
                          <button
                            class="theme-btn btn-style-fifteen"
                            type="button"
                            disabled={loading}
                          >
                            Sending ...
                          </button>
                        ) : (
                          <button
                            class="theme-btn btn-style-fifteen"
                            type="submit"
                            disabled={loading}
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                {/*End Contact Form */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowSection;
