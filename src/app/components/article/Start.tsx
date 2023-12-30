import { nextStateType, valueStateType } from "@/app/page";
import { QRCodeIcon } from "@/assets/svg/qrcode";
import { Input } from "@nextui-org/input";
import { Button } from '@nextui-org/react'
import { useState } from "react";

export default function Start({ setNext, setValue }: { setNext: nextStateType, setValue: valueStateType }) {


  return (
    <>
      <h3 className=" text-center text-4xl text-[#646464] font-bold">QR-code generator</h3>
      <div className="grid w-full h-max gap-5">
        <Input color="primary" onValueChange={setValue} size="sm" variant="bordered" className=" text-black" placeholder="Write data in this place..." />
        <Button startContent={<QRCodeIcon fill="currentColor" />} onClick={() => {
          setNext(true);
        }} color="secondary" variant="solid" className=" font-bold text-white ">Get qr-code</Button>
      </div>
    </>
  )
}
