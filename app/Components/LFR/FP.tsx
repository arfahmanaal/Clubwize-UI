"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/Component 4.png";
import Check from "../../../public/assets/valid-icon.png";
import Exclamation from "../../../public/assets/invalid-icon.png";
import Link from "next/link";
import { routes } from "@/app/Routes/routes";

function FP() {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [loginAttempted, setLoginAttempted] = useState<boolean>(false);

  const handleLoginClick = () => {
    setLoginAttempted(true);
    const isEmailCorrect = email === "test@gmail.com";

    setIsEmailValid(isEmailCorrect);

    if (isEmailCorrect) {
      window.location.href = "/Reset/Email";
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="bg- p-10 rounded-lg">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </div>
        </div>

        <h2 className="text-center text-3xl font-bold mb-2">
          Forgot Password <span>🔓</span>
        </h2>
        <p className="text-center font-normal text-xs text-gray-400 mb-8">
          No worries. We&apos;ll send you reset instructions.
        </p>

        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 "
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:border-transparent ${
              isEmailValid === null
                ? ""
                : isEmailValid
                ? "ring-green-300 border-green-500"
                : "ring-red-300 border-red-500"
            }`}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {isEmailValid !== null && (
            <span className="absolute right-3 top-10">
              {isEmailValid ? (
                <Image
                  src={Check}
                  alt="check"
                  width={20}
                  height={20}
                  className="text-green-500"
                />
              ) : (
                <Image
                  src={Exclamation}
                  alt="Exclamation"
                  width={20}
                  height={20}
                  className="text-red-500"
                />
              )}
            </span>
          )}
          {loginAttempted && !isEmailValid && (
            <p className="text-red-500 text-xs mt-1">
              Please enter a valid email address
            </p>
          )}
        </div>
        
          <button
            onClick={handleLoginClick}
            className="w-full bg-button hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-24"
          >
            Forgot Password
          </button>

        <p className="text-center text-gray-600 mt-6">
          Remember your Password ?{" "}
          <Link href={routes.onboarding} className="text-button hover:underline">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
}

export default FP;
