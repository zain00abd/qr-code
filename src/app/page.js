import Image from "next/image";
import styles from "./page.module.css";


import QRScanner from "../app/components/QRScanner";

export default function Home() {
  return (
    <div>
      <h1>QR Code Scanner App</h1>
      <QRScanner />
    </div>
  );
}
