import { Button } from "../../../components/ui/button";
import { useEffect, useState } from "react";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";

export default function ScanQr() {
    const [scanResult, setScanResult] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(scanResult);
    }, [scanResult]);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: { width: 250, height: 250 },
            fps: 5,
        });

        scanner.render(
            (res) => {
                scanner.clear();
                setScanResult(res);
            },
            () => {
                setError(true);
            }
        );

        // Cleanup function to stop the scanner when the component unmounts
        return () => {
            scanner.clear().catch((error) => console.error("Failed to clear scanner:", error));
        };
    }, []);

    return (
        <div className="flex-1 mt-20">
            <div id='reader' className="max-w-[400px]] border rounded-xl h-96e mx-auto"></div>
            {!scanResult &&
                <div className="">
                    <div className="mt-10">
                        <h1 className="text-green-600 font-medium text-xl text-center mb-3">You marked as present succusfully</h1>
                        <h1 className="text-gray-600 font-medium text-center mb-3 ">Now pass the new Qr code to your classmate</h1>
                        <div className="w-[300px] h-[300px] rounded-xl bg-black mx-auto"></div>
                    </div>
                </div>
            }
            
            {/* <div className="mt-8 flex justify-center">
                <Button
                    className="mx-auto"
                >
                    Submit
                </Button>
            </div> */}
        </div>
    );
}
