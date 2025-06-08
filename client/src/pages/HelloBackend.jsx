// src/HelloBackend.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function HelloBackend() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => setMessage(response.data))
      .catch((error) => setMessage("Error: " + error.message));
  }, []);

  return <h1>{message}</h1>;
}

export default HelloBackend;
