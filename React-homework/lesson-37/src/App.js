import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css"

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
        .matches(/^[a-zA-Zа-яА-Яіїєґ]+(([',. -][a-zA-Zа-яА-Яіїєґ ])?[a-zA-Zа-яА-Яіїєґ]*)*$/, "Invalid name")
        .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
        .matches(/^\+380\d{9}$/, "Invalid phone number")
        .required("Required"),
  message: Yup.string()
        .min(10, "Must be at least 10 characters")
        .required("Required"),
  agree: Yup.bool().oneOf([true], "Required"),
});

const ContactForm = () => (
      <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            agree: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert("Запит було надіслано");
              setSubmitting(false);
            }, 400);
          }}
      >
        {({ isSubmitting }) => (
            <Form className="form">
              <div className="hold">
                  <label  className="label FullName-label">
                      <Field type="text" name="fullName" placeholder="Ім'я та Прізвище" className="input FullName"/>
                      <ErrorMessage name="fullName"  className="error-message"/>
                  </label>


                  <label className="label email-label">
                      <Field type="email" name="email" placeholder="Email" className="input email"/>
                      <ErrorMessage name="email"  className="error-message"/>
                  </label>
              </div>
              <label  className="label phone-label">
                  <Field type="text" name="phone" placeholder="Телефон(у форматі +380)" className="input phone"/>
                  <ErrorMessage name="phone"  className="error-message"/>
              </label>

              <label  className="label message-label">
                  <Field type="text" name="message" placeholder="Повідомлення" className="input message"/>
                  <ErrorMessage name="message"  className="error-message"/>
              </label>

              <label className="checkbox-label">
                <Field type="checkbox" name="agree" className="checkbox"/>
                Надсилати мені оновлення про академі
                <ErrorMessage name="Required"  className="error-message"/>
              </label>

              <button type="submit" disabled={isSubmitting} className="btn">
                Надіслати
              </button>
            </Form>
        )}
      </Formik>
);

export default ContactForm;
