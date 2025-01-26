import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  username: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  password: Yup.string().required("Password is required").trim(),
  company_id: Yup.string().required("Company ID is required").trim(),
});

export const tenantComplaintValidationSchema = Yup.object({
  createdByEmail: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  createdBy: Yup.string().required("Name is required").trim(),
  createdByContact: Yup.number()
    .typeError("Contact must be a number") // Ensures the value is a number
    .required("Contact is required"), // Ensures no decimal points
  description: Yup.string().required("Description is required").trim(),
  company_id: Yup.string().required("Company ID is required").trim(),
  building_id: Yup.string().trim(),
  office_id: Yup.string().trim(),
});

export const contactValidationSchema = Yup.object({
  name: Yup.string().required("Name is required").trim(),
  company_name: Yup.string().required("Company Name is required").trim(),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  contact_number: Yup.string()
    .required("Contact Number is required")
    .matches(/^[0-9]+$/, "Contact Number must be digits only")
    .trim(),
  comment: Yup.string().required("Comment is required").trim(),
});
