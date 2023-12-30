import { nextStateType } from "@/app/page";
import { RefreshIcon } from "@/assets/svg/refresh";
import { Button } from "@nextui-org/button";

export default function Canvas({ setNext }: { setNext: nextStateType }) {
  return (
    <>
      <canvas className=" border border-gray-100" id="qr-code"></canvas>
      <Button startContent={<RefreshIcon fill="currentColor" />} color="secondary" className="w-full font-bold text-white " variant="solid" onClick={() => {
        setNext(false);
      }} >New</Button>
    </>
  )
}
