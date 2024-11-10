import { Button } from "../../../components/ui/button";
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { QRCodeCanvas } from "qrcode.react";

export default function ScanQr() {
    const [scanResult, setScanResult] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(scanResult);
    }, [scanResult]);

    useEffect(() => {
        const scannerId = "reader";
        const scanner = new Html5QrcodeScanner(scannerId, {
            qrbox: { width: 250, height: 250 },
            fps: 5,
        });

        scanner.render(
            (result) => {
                setScanResult(result); // Set scan result on successful scan
                scanner.clear().catch((error) => console.error("Failed to clear scanner:", error));
            },
            (error) => {
                console.warn("QR scan error:", error);
                setError(true);
            }
        );

        // Cleanup function to clear the scanner on component unmount
        return () => {
            if (scanner) {
                scanner.clear().catch((error) => console.error("Failed to clear scanner:", error));
            }
        };
    }, []); // Empty dependency array to ensure this runs only once

    return (
        <div className="flex-1 mt-20">
            
            
            {scanResult ? (
                <div className="mt-10 text-center">
                    <h1 className="text-green-600 font-medium text-xl mb-3">
                        You marked as present successfully
                    </h1>
                    <h1 className="text-gray-600 font-medium mb-3">
                        Now pass the new Qr code to your classmate
                    </h1>
                    <div className="w-[300px] h-[300px] rounded-xl mx-auto flex justify-center">
                        <QRCodeCanvas 
                            value={"my data"}
                            size={256} // Size of the QR code
                            bgColor={"#ffffff"} // Background color
                            fgColor={"#000000"} // Foreground color
                            level={"H"} // Error correction level (L, M, Q, H)
                        />
                    </div>
                </div>
            ) : (
                <div id="reader" className="max-w-[400px] border rounded-xl h-96 mx-auto"></div>
                // error && <p className="text-red-500 text-center mt-4">Error scanning QR code.</p>
            )}
        </div>
    );
}
