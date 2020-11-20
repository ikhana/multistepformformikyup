import React from 'react';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 
 export const Payment = ({submit,setFormValues, preValues }) => {
   const formik = useFormik({
     initialValues: {
      preValues
     },
     validationSchema: Yup.object({
        cardName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
         cardNumber: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
     }),
     onSubmit: values => {
       submit(2)
       setFormValues({...values, ...preValues})
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="cardName">Card Name</label>
       <input
         id="cardName"
         name="cardName"
         type="cardName"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.cardName}
       />
       {formik.touched.cardName && formik.errors.cardName ? (
         <div>{formik.errors.cardName}</div>
       ) : null}
       <label htmlFor="cardNumber">Card Number</label>
       <input
         id="cardNumber"
         name="cardNumber"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.cardNumber}
       />
       {formik.touched.cardNumber&& formik.errors.cardNumber ? (
         <div>{formik.errors.cardNumber}</div>
       ) : null}
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
       <button onClick={()=>submit(0)}>Back</button>
       <button type="submit">Submit</button>
     </form>
   );
 };