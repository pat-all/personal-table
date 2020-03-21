import React, { useState } from "react";
import SimpleAlert from "../components/Alert.component";

const useAlert = () => {
  const [message, setAlertMessage] = useState("");
  const [severity, setAlertSeverity] = useState("");
  const clearAlert = () => {
    setAlertMessage("");
    setAlertSeverity("");
  };

  const setAlert = {
    success: message => {
      setAlertMessage(message);
      setAlertSeverity("success");
    },
    error: message => {
      setAlertMessage(message);
      setAlertSeverity("error");
    },
    info: message => {
      setAlertMessage(message);
      setAlertSeverity("info");
    },

    warning: message => {
      setAlertMessage(message);
      setAlertSeverity("warning");
    },
  };

  const AlertComponent = () => {
    return (
      severity && (
        <SimpleAlert
          message={message}
          severity={severity}
          clearAlert={clearAlert}
        />
      )
    );
  };

  return { AlertComponent, setAlert };
};

export default useAlert;
