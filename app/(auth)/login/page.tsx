"use client"

import { loginschema, } from '@/app/helpers/login_registerschema';
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import Link from 'next/link';
import { LoginFormType } from '@/app/helpers/types';
import LoginService from '@/app/service/Userservices/LoginService';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { getCsrfToken, signIn } from "next-auth/react";

const Login = () => {

    const [loginbuttonloading, setloginbuttonloading] = useState(false);

    const [showpassword, setshowPPassword] = useState(false)
    const route = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormType>({
        resolver: zodResolver(loginschema)
    });

    //   const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data)

    const onSubmit = async (data: LoginFormType) => {
        debugger;


        setloginbuttonloading(true)
        try {


            const result = await signIn("credentials", {
                email: data.email,
                password:data.password,
                redirect: false, // Avoid automatic redirects for custom error handling
              });
            var response = await LoginService(data)
            if (response?.operationStatus != 1) {
                toast.error(`${response?.message}`)
            } else if (response?.operationStatus === 1 && response.token != null) {
                route.push('/main')
            }
            // console.log(data)
            setloginbuttonloading(false)


        } catch (error) {
            setloginbuttonloading(false)

        } finally {
            setloginbuttonloading(false)

        }

    }


    return (

        <>

            <Toaster />
            <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md w-3/4 sm:w-full rounded-lg px-10 py-10 max-w-lg">
                    <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome !</h1>

                    <form method='POST' onSubmit={handleSubmit(onSubmit)} action="">


                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input {...register("email")} type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" />

                            <span className=   'text-red-500 text-sm'>
                                {errors.email && <p>{errors.email.message}</p>}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                {/* Input Field */}
                                <input
                                    type={showpassword ? "text" : "password"}
                                    {...register("password")}
                                    id="password"
                                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                                    placeholder="Enter your password"
                                />

                                {/* Toggle Button */}
                                <button
                                    type="button"
                                    onClick={() => setshowPPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-indigo-500 "
                                >
                                    <FontAwesomeIcon icon={showpassword ? faEye : faEyeSlash} />
                                </button>
                            </div>

                            {/* Error Message */}
                            {errors.password && (
                                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                            )}

                            {/* Forgot Password Link */}
                            <a
                                href="#"
                                className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2 block"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                            </div>

                            <Link href="/register" className='text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                Register &rarr;
                            </Link>

                        </div>


                        <button type="submit" className={`  w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loginbuttonloading ? 'opacity-50 cursor-not-allowed' : ''} `} disabled={loginbuttonloading}>  {loginbuttonloading ? 'Login...' : 'Login '} </button>
                    </form>


                </div>
            </div>


        </>

    )
}
export default Login;
