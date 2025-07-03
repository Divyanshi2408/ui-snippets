import React from 'react'
import PrivacyPolicy from "./components/PrivacyPolicy";
import CancellationRefundPolicy from "./components/CancellationRefundPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

const App = () => {
  return (
    <>
   <TermsAndConditions/>
   <PrivacyPolicy/> 
   <CancellationRefundPolicy/>
   </>
  )
}

export default App