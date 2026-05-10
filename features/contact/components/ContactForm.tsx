"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData } from "../types";
import { contactSchema } from "../schema/contactSchema";
import toast from "react-hot-toast";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    reset();
    toast.success("Message sent successfully!", {
      style: {
        fontSize: "16px",
        padding: "16px 24px",
        minWidth: "300px",
        background: "#262626",
        color: "#fff",
      },
    });
  };

  return (
    <div className="w-full max-w-[478px] min-w-[478px] md:max-w-[910px] md:min-w-[910px] lg:max-w-[1260px] lg:min-w-[1260px] flex min-h-[500px] mt-12">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 bg-[#262626] p-8 md:p-14  flex flex-col justify-center ">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[48px] mb-8 leading-tight">
          Tell us about your <span className="text-[#F5A623]">Concerns</span>
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white font-semibold text-sm">
              Your Name
            </label>
            <div
              className={`flex items-center gap-3 border rounded-sm px-4 py-3 bg-transparent transition-colors duration-150 md:max-w-[295px] lg:max-w-[520px] ${
                errors.name
                  ? "border-red-500"
                  : "border-[#D9D9D9] focus-within:border-blue-500"
              }`}
            >
              <Image src={"/User.svg"} alt="User" width={24} height={24} />
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name here"
                className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-xs">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white font-semibold text-sm">Email</label>
            <div
              className={`flex items-center gap-3 border  rounded-sm px-4 py-3 bg-transparent transition-colors duration-150 md:max-w-[295px] lg:max-w-[520px] ${
                errors.email
                  ? "border-red-500"
                  : "border-[#D9D9D9] focus-within:border-blue-500"
              }`}
            >
              <Image src="/mail.svg" alt="Email Icon" width={24} height={24} />
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Your Email here"
                className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white font-semibold text-sm">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Tell us about your concerns"
              rows={5}
              className={`border rounded-sm px-4 py-3 bg-transparent text-white text-sm placeholder-gray-500 outline-none transition-colors duration-150 md:max-w-[295px] lg:max-w-[520px] resize-none ${
                errors.description
                  ? "border-red-500"
                  : "border-[#D9D9D9] focus:border-blue-500"
              }`}
            />
            {errors.description && (
              <p className="text-red-400 text-xs">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4172DC] text-white font-semibold py-3 rounded-sm hover:bg-blue-700 transition-colors duration-200 tracking-widest uppercase mt-2 disabled:opacity-60 disabled:cursor-not-allowed md:max-w-[295px] lg:max-w-[520px]"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      {/* Right: Image — hidden on mobile */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/essentialLeft.png"
          alt="Fashion models"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
