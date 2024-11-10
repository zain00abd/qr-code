"use client"
import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const qrCodeRegionId = "qr-reader";

  const handleScanSuccess = (decodedText) => {
    setScanResult(decodedText);
  };

  useEffect(() => {
    const html5QrcodeScanner = new Html5Qrcode(qrCodeRegionId);
    html5QrcodeScanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      handleScanSuccess
    ).catch((err) => console.error("Unable to start QR scanner", err));

    return () => {
      html5QrcodeScanner.stop().catch((err) => console.error("Unable to stop QR scanner", err));
    };
  }, []);

  return (
    <div>
      <h1>QR Scanner</h1>
      <div id={qrCodeRegionId} style={{ width: "100%" }}></div>
      {scanResult && <p>Scanned Data: {scanResult}</p>}
    </div>
  );
};

export default QRScanner;


