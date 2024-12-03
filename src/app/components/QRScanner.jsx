// components/QRScanner.jsx
"use client";

import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: { width: 250, height: 250 },
      fps: 20,
    });

    const success = (result) => {
      console.log(result);
      document.getElementById("result").innerHTML = `
        <h2>نجاح!</h2>
        <p><a href="${result}" target="_blank">${result}</a></p>
      `;

      scanner.clear();
      document.getElementById("reader").remove();
    };

    const error = (err) => {
      console.error(err);
    };

    scanner.render(success, error);

    return () => {
      scanner.clear(); // تنظيف عند إزالة المكون
    };
  }, []);

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div id="reader" style={{ width: "600px" }}></div>
      <div id="result" style={{ textAlign: "center", fontSize: "1.5rem" }}></div>
    </main>
  );
};

export default QRScanner;
