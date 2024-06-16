import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  username: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  password: Yup.string().required("Password is required").trim(),
  company_id: Yup.string().required("Company ID is required").trim(),
});
