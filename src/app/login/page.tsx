"use client"

import Image from "next/image"
import LoginForm from "./_components/LoginForm"


export default function LoginPage() {

    return (
        <div className="h-screen flex w-full justify-center items-center bg-[#4880FF] overflow-hidden">
            <Image
                className="w-full h-full"
                alt={"Planingo Dashboard"}
                src={'/assets/shape.png'}
                width={2000}
                height={2000}
                unoptimized
            />
            <div className="w-11/12 md:w-[630px] flex absolute flex-col items-center bg-white rounded-3xl shadow-2xl p-5 md:p-10">
                <div className="w-3/12">
                    <Image
                        alt={"Planingo"}
                        src={'/assets/logo.png'}
                        width={500}
                        height={300}
                        unoptimized
                    />
                </div>
                <h2 className="font-bold text-[32px] mt-10">Login to Account</h2>
                <p className="text-[18px] text-gray-700 mt-3">Please enter your email and password to continue</p>

                <LoginForm />

            </div>
        </div>
    )
}