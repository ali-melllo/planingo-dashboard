"use client"

import Image from "next/image"
import LoginForm from "./_components/LoginForm"


export default function LoginPage() {

    return (
        <div className="h-screen flex justify-center items-center bg-[#4880FF] overflow-hidden">
            <Image
                className="w-full h-full"
                alt={"Planingo Dashboard"}
                src={'/assets/shape.png'}
                width={2000}
                height={2000}
            />
            <div className="min-w-[630px] flex flex-col items-center absolute bg-white rounded-3xl shadow-2xl p-10">
                <div className="w-3/12">
                    <Image
                        alt={"Planingo"}
                        src={'/assets/logo.png'}
                        width={500}
                        height={300}
                    />
                </div>
                <h2 className="font-bold text-[32px] mt-10">Login to Account</h2>
                <p className="text-[18px] text-gray-700 mt-3">Please enter your email and password to continue</p>

                <LoginForm />

            </div>
        </div>
    )
}