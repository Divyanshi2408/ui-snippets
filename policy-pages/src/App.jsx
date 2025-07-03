import React from 'react'
import PrivacyPolicy from "./components/PrivacyPolicy";
import CancellationRefundPolicy from "./components/CancellationRefundPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ShippingAndDelivery from "./components/ShippingAndDelivery";

const App = () => {
  return (
    <>
   <TermsAndConditions/>
   <PrivacyPolicy/> 
   <CancellationRefundPolicy/>
   <ShippingAndDelivery/>
   </>
  )
}

export default App