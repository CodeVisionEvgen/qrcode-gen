"use client"
import { NextUIProvider } from '@nextui-org/react'
import Start from './components/article/Start'
import { SetStateAction, useEffect, useState } from 'react'
import Canvas from './components/canvas/Canvas'
import { Dispatch } from 'react'
import QRCode from "qrcode";

export type nextStateType = Dispatch<SetStateAction<boolean>>;
export type valueStateType = Dispatch<SetStateAction<string | undefined>>;

export default function Home() {
  const [value, setValue] = useState<string>();
  const [next, setNext] = useState<boolean>(false)

  useEffect(() => {
    if (next) {
      const canvas = document.getElementById('qr-code') as HTMLElement;
      QRCode.toCanvas(canvas, value as string, (err) => {
        console.error(err);
      })
    }
  }, [next])

  return (
    <NextUIProvider>
      <main className=' from-lime-300 to-orange-300 bg-gradient-to-br w-screen h-screen flex justify-center'>
        <article className=" bg-white rounded w-80 h-96 mt-10 grid justify-center p-2 justify-items-center font-sans">
          {next ? <Canvas value={value} setNext={setNext} /> : <Start setValue={setValue} setNext={setNext} />}
        </article>
      </main>
    </NextUIProvider>
  )
}
