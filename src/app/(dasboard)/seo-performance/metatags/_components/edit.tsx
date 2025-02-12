import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

export default function EditMetaTagPage() {
    const { register } = useForm();

    return (
        <div className="w-full mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="username" className="font-medium text-[14px] text-[#111928]">
                        Title Tag
                    </Label>
                    <Input
                        placeholder="Best Hotels in Dubai | PlaninGo"
                        className="h-10 !rounded-[8px] border-gray-300 placeholder:text-[14px] !text-[14px] font-medium placeholder:text-[#6A7282] bg-[#F3F4F6]"
                        {...register("username", {
                            required: "hotel is required",
                        })}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="username" className="font-medium text-[14px] text-[#111928]">
                        H1 (Heading 1)
                    </Label>
                    <Input
                        placeholder="Best Hotels in Dubai | PlaninGo"
                        className="h-10 !rounded-[8px] border-gray-300 placeholder:text-[14px] !text-[14px] font-medium placeholder:text-[#6A7282] bg-[#F3F4F6]"
                        {...register("username", {
                            required: "hotel is required",
                        })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="username" className="font-medium text-[14px] text-[#111928]">
                        Meta Description
                    </Label>
                    <textarea
                        placeholder="Discover the best hotels in Dubai with exclusive offers on PlaninGo"
                        className="min-h-48 p-3 outline-none border border-[#D1D5DB] !rounded-[8px] placeholder:text-[14px] !text-[14px] font-medium placeholder:text-[#6A7282] bg-[#F3F4F6] align-text-top pt-3"
                        {...register("username", {
                            required: "Hotel is required",
                        })}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="username" className="font-medium text-[14px] text-[#111928]">
                        Schema S
                    </Label>
                    <textarea
                        placeholder={`{
  name: null,
  description: null,
  url: null
}`}
                        className="min-h-48 p-3 outline-none border border-[#D1D5DB] !rounded-[8px] placeholder:text-[14px] !text-[14px] font-medium placeholder:text-[#6A7282] bg-[#F3F4F6] align-text-top pt-3"
                        {...register("username", {
                            required: "Hotel is required",
                        })}
                    />
                </div>
            </div>

            <div className="flex justify-end mt-6 gap-5 text-[14px] font-medium">
                <Button variant={"ghost"} className="border border-[#D1D5DB] rounded-lg">
                    Cancel
                </Button>
                <Button className="bg-[#005F73] hover:bg-[#154953] px-7 rounded-lg">
                    Save
                </Button>
            </div>
        </div>
    );
}
