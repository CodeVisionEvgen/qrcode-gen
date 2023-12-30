import { nextStateType } from "@/app/page";
import { DownloadIcon } from "@/assets/svg/download";
import { RefreshIcon } from "@/assets/svg/refresh";
import { Button } from "@nextui-org/button";
import QRCode from "qrcode";

export default function Canvas({ setNext, value }: { setNext: nextStateType, value: string | undefined }) {
  return (
    <>
      <canvas className=" border border-gray-100" id="qr-code"></canvas>
      <div className="w-full grid gap-4 h-max">
        <Button className="font-bold text-white" startContent={<RefreshIcon fill="currentColor" />} color="secondary" variant="solid" onClick={() => {
          setNext(false);
        }} >New</Button>
        <Button onClick={async () => {
          const canvas = document.getElementById('qr-code') as HTMLCanvasElement
          const dataUrl = await new Promise((res, rej) => {
            QRCode.toDataURL(canvas, value as string, (err, url) => {
              if (err) rej(err);
              res(url);
            })
          })
          if (typeof dataUrl === "string") {
            const tempElement = document.createElement('a');
            tempElement.download = `qrcode-${(Math.random() * 1000).toFixed(0)}.png`
            tempElement.href = dataUrl;
            tempElement.click();
          }
        }} className="font-bold text-white" startContent={<DownloadIcon fill="currentColor" />} color="success" variant="solid">Download</Button>
      </div>
    </>
  )
}
