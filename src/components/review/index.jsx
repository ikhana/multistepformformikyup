import React from 'react':


 export const Review = ({submit,values}) => {
  return(
      <div>
          <span>Province Name: {values.Province}</span>
          <br/>
          <span>City Name: {values.City} </span>
          <br/>
          <span>Street Number: {values.Streetnumber}</span>
          <br/>
          <span>Card Holder Name: {values.cardName}</span>
          <br/>
          <span>Card Number: {values.cardNumber}</span>
          <br/>
           <span>Email: {values.email}</span>
           <br/>
           <button onClick={()=>submit(1)}>Back</button>
      </div>
   );
 }; 