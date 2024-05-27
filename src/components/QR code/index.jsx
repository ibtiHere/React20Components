import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";
const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const HandleQR = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR CODE GENERATOR</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter Your Value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={HandleQR}
        >
          Generate
        </button>
      </div>
      <div className="qr-code">
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </div>
  );
};
export default QrCodeGenerator;
