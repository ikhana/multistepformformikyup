import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const Address = ({ submit, setFormValues, preValues }) => {
  const formik = useFormik({
    initialValues: {
      preValues
    },
    validationSchema: Yup.object({
      Province: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      City: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      Streetnumber: Yup.string()
        .max(3, 'Must be 3 digits or less')
        .min(1, 'Must be 1 digit or more')
        .required('Required'),
    }),
    onSubmit: values => {
      submit(1)
      setFormValues({ ...values })
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="Province">Province Name</label>
      <input
        id="Province"
        name="Province"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Province}
      />
      {formik.touched.Province && formik.errors.Province ? (
        <div>{formik.errors.Province}</div>
      ) : null}
      <label htmlFor="City">City Name</label>
      <input
        id="City"
        name="City"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.City}
      />
      {formik.touched.City && formik.errors.City ? (
        <div>{formik.errors.City}</div>
      ) : null}
      <label htmlFor="Streetnumber">Street Number</label>
      <input
        id="Streetnumber"
        name="Streetnumber"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Streetnumber}
      />
      {formik.touched.Streetnumber && formik.errors.Streetnumber ? (
        <div>{formik.errors.Streetnumber}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};