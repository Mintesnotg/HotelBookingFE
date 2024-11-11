"use client"

import { loginschema, registerschema } from '@/app/helpers/login_registerschema';
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import Link from 'next/link';
import { LoginFormType } from '@/app/helpers/types';

const Login = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginFormType>({
        
        resolver: zodResolver(loginschema)
      });    
      
    //   const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data)

     const onSubmit = (data :LoginFormType) => {
        debugger;
         console.log(data)
     }


    return (

        <>
            <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome !</h1>

                    <form onSubmit={handleSubmit(onSubmit)} action="">


                        <div className="mb-4">
                            <label htmlFor="email" {...register("email")} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com"  />
                      
                            <span className=' bg-red-400'>
                            {errors.email && <p>{errors.email.message}</p>}
                            </span>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                            <input type="password" {...register("password")} id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password"  />
                           
                            <span  className=' bg-red-400'>
                            {errors.password && <p>{errors.password.message}</p>}

                            </span>
                            <a href="#"
                                className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">htmlForgot
                                Password?</a>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"  />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                            </div>

                            <Link href="/register" className='text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                Register
                            </Link>

                        </div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                    </form>


                </div>
            </div>


        </>

    )
}
export default Login;
