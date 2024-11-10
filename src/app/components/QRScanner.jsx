"use client"
import { useState } from "react";
import dynamic from "next/dynamic";

// تحميل مكتبة react-qr-reader فقط على جانب العميل
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1>QR Scanner</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {scanResult && <p>Scanned Data: {scanResult}</p>}
    </div>
  );
};

export default QRScanner;

