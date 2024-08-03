/* eslint-disable @next/next/no-img-element */
"use client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useAccountEffect } from "wagmi";

export default function Home() {
  const { open } = useWeb3Modal();

  useAccountEffect({
    onConnect(data) {
      console.log("Connected!", data);
    },
    onDisconnect() {
      /* const cookie = new Cookies()
				cookie.remove('addresso') */
      //removeAccessTokenCookie()
      //router.push('/')
      console.log("Disconnected");
    },
  });

  const onSuccess = (data: any) => {
    console.log("onSuccess!", data);
  };
  return (
    <div className="relative flex flex-col w-full md:w-4/5 items-center justify-center">
      <div
        onClick={() => open()}
        className="absolute flex flex-col items-center justify-center w-75 md:w-2/4 rounded-2xl bg-white bg-opacity-80 p-6 text-black"
      >
        Login here
      </div>
    </div>
  );
}
