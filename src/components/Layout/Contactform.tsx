import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  preferences: yup.array().min(1, "Select at least one preference"),
  privacy: yup.boolean().oneOf([true], "You must agree to the privacy policy"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-4 sm:p-6 text-white rounded-lg flex flex-col gap-3"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-orange-400">Get in touch</h2>
      <p className="mb-3 sm:mb-4 text-sm sm:text-base">Our friendly team would love to hear from you.</p>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <input
            type="text"
            placeholder="First name"
            {...register("firstName")}
            className="w-full p-2 rounded bg-gray-400 opacity-40 placeholder-gray-800 text-sm sm:text-base"
          />
          <p className="text-red-300 text-xs sm:text-sm">{errors.firstName?.message}</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            {...register("lastName")}
            className="w-full p-2 rounded bg-gray-400 opacity-40 placeholder-gray-800 text-sm sm:text-base"
          />
          <p className="text-red-300 text-xs sm:text-sm">{errors.lastName?.message}</p>
        </div>
      </div>

      {/* Email */}
      <div className="mt-3 sm:mt-4">
        <input
          type="email"
          placeholder="you@company.com"
          {...register("email")}
          className="w-full p-2 rounded bg-gray-400 opacity-40 placeholder-gray-800 text-sm sm:text-base"
        />
        <p className="text-red-300 text-xs sm:text-sm">{errors.email?.message}</p>
      </div>

      {/* Phone */}
      <div className="mt-3 sm:mt-4">
        <input
          type="tel"
          placeholder="+1 (555) 000-0000"
          {...register("phone")}
          className="w-full p-2 rounded bg-gray-400 opacity-40 placeholder-gray-800 text-sm sm:text-base"
        />
        <p className="text-red-300 text-xs sm:text-sm">{errors.phone?.message}</p>
      </div>

      {/* Preferences */}
      <div className="mt-3 sm:mt-4">
        <p className="font-semibold mb-2 text-sm sm:text-base">Email preferences</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <label className="text-sm sm:text-base">
            <input
              className="mr-2"
              type="checkbox"
              value="deals"
              {...register("preferences")}
            />
            Deals/Offers
          </label>
          <label className="text-sm sm:text-base">
            <input type="checkbox" value="menu" {...register("preferences")} className="mr-2" />
            Menu Updates
          </label>
          <label className="text-sm sm:text-base">
            <input type="checkbox" value="news" {...register("preferences")} className="mr-2" />
            Jodhpur News
          </label>
          <label className="text-sm sm:text-base">
            <input
              type="checkbox"
              value="vacancies"
              {...register("preferences")}
              className="mr-2"
            />
            Vacancies
          </label>
        </div>
        <p className="text-red-300 text-xs sm:text-sm">{errors.preferences?.message}</p>
      </div>

      {/* Privacy Policy */}
      <div className="mt-3 sm:mt-4">
        <label className="text-sm sm:text-base">
          <input type="checkbox" {...register("privacy")} className="mr-2" />
          I agree to the{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
        </label>
        <p className="text-red-300 text-xs sm:text-sm">{errors.privacy?.message}</p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-4 sm:mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm sm:text-base"
      >
        Send message
      </button>
    </form>
  );
}
