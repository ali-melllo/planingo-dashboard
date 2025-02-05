"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Info } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form";

export default function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: unknown) => {
        console.log("Form Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-2">
                    <Label className="font-semibold text-[18px] text-gray-700" htmlFor="email">Email address:</Label>
                    <Input
                        className="h-14 !rounded-2xl border-gray-300 placeholder:text-[18px] !text-[18px] font-medium placeholder:text-[#6A7282] bg-[#F3F4F6]"
                        id="email"
                        placeholder="esteban_schiller@gmail.com"
                        {...register("email", { required: "Email is required" })} />
                </div>

                <div className="flex flex-col space-y-1.5 mt-8 relative">
                    <Label className="font-semibold text-[18px] text-gray-700" htmlFor="password">
                        Password:
                    </Label>
                    <div className="relative">
                        <Input
                            className="h-14 rounded-2xl border-gray-300 !text-[18px] placeholder:font-extrabold placeholder:text-2xl tracking-widest placeholder:tracking-[0.3em] font-medium placeholder:text-[#6A7282] bg-[#F3F4F6] pr-12"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="••••••"
                            {...register("password", { required: "Password is required" })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                    <Checkbox id="terms" />
                    <Label className="text-[18px] text-gray-700" htmlFor="terms">Remember Password</Label>
                </div>

                {(errors.email || errors.password) && (
                    <div className="flex items-center text-red-500">
                        <Info className="size-5" />
                        <p className="ml-3">This data is wrong</p>
                    </div>
                )}

                <Button className="bg-[#005F73] hover:bg-[#154953] w-[418px] h-14 mx-auto my-5 text-[20px] font-bold rounded-xl">
                    Sign In
                </Button>
            </div>
        </form>
    )
}