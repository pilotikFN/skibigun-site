import React from "react";
import { Navigate } from "react-router-dom";

const AutoRedirect = () => {
   const language = navigator.language || navigator.userLanguage;
   let redirectLink = "";

   if (language.startsWith("ru")) {
      redirectLink = "/ru";
   } else {
      redirectLink = "/en";
   }

   console.log(`Redirecting to ${redirectLink}`);
   return <Navigate to={redirectLink} />;
};

export default AutoRedirect;
