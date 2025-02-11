"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setAuthToken } from "@/lib/auth/action";
import { useLoginUserMutation } from "@/lib/services/endpoints/admin/admin";
import { AdminAttributesLoginParamsType } from "@/lib/services/endpoints/admin/types";
import { Eye, EyeOff, Info } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<AdminAttributesLoginParamsType>();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = useCallback(
    async (data: AdminAttributesLoginParamsType) => {
      try {
        const response = await loginUser(data).unwrap();
        await setAuthToken(response.data.token);
        localStorage.setItem("userEmail", response.data.admin.email);
        toast("Welcome" + " " + response.data.admin.name)
        router.push("/");
      } catch {

      }
    }, [loginUser, router]);

  const handleEmailBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const email = e.target.value;
      const formattedEmail = email.replace(/\.(?=[^@]*@)/g, ""); // Remove all dots before "@"

      if (formattedEmail !== email) {
        setValue("username", formattedEmail, { shouldValidate: true, shouldDirty: true });
      }
    },
    [setValue]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
      <div className="flex flex-col md:w-full gap-4">
        <div className="flex w-full flex-col space-y-2">
          <Label htmlFor="username" className="font-semibold text-[18px] text-gray-700">
            Email address:
          </Label>
          <Input
            id="username"
            placeholder="example@gmail.com"
            className="h-14 !rounded-2xl border-gray-300 placeholder:text-[18px] !text-[18px] font-medium placeholder:text-[#6A7282] bg-[#F3F4F6]"
            {...register("username", {
              required: "User name is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+[^.]@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
              onBlur: handleEmailBlur,
            })}
          />
        </div>

        <div className="flex w-full flex-col space-y-1.5 mt-8 relative">
          <Label htmlFor="password" className="font-semibold text-[18px] text-gray-700">
            Password:
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••"
              className="h-14 rounded-2xl border-gray-300 !text-[18px] placeholder:font-extrabold placeholder:text-2xl tracking-widest placeholder:tracking-[0.3em] font-medium placeholder:text-[#6A7282] bg-[#F3F4F6] pr-12"
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

        <div className="flex items-center justify-start space-x-2 mt-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-[18px] text-gray-700">
            Remember Password
          </Label>
        </div>

        {(errors.username || errors.password) && (
          <div className="flex items-center text-red-500">
            <Info className="size-5" />
            <p className="ml-3">This data is wrong</p>
          </div>
        )}

        <Button
          disabled={isLoading}
          className="bg-[#005F73] hover:bg-[#154953] w-full md:w-[418px] h-14 mx-auto my-5 text-[20px] font-bold rounded-xl"
        >
          {isLoading ? (
            <Image alt="Loading ..." src="/assets/loader.svg" className="animate-spin" width={24} height={24} />
          ) : (
            "Sign In"
          )}
        </Button>
      </div>
    </form>
  );
}
