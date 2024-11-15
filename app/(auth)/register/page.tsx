
"use client"

import { registerschema, } from '@/app/helpers/login_registerschema';
import { RegisterFormType } from '@/app/helpers/types';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import React from 'react'
import UserRegistration from '@/app/components/navigation/UserRegistration';
import toast ,{ Toaster } from 'react-hot-toast';

import { useRouter } from 'next/navigation';




const Register = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormType>({
        resolver: zodResolver(registerschema)
    });

    //   const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data)
    const [signinloading, setsigninloading] = useState(false);


    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const onSubmit = async (data: RegisterFormType) => {

        console.log(data);
    
        try {
            // Set loading to true before submitting
            setsigninloading(true);
            const result = await UserRegistration(data)
            if (result.status == 1) {

                
                toast.success(`${result.message}` ,{duration :5000})          ;
         
                  setTimeout(() => {
                    router.push('login')

                  }, 4000);
      
  
            } else {
           
                    toast.error(`${result.message}` , {
                        duration:3000
                    })
            }

            setsigninloading(false);

            // Simulate API call or other async operations here
            // e.g., await someApiCall(data);
        } catch (error) {
            setsigninloading(false);
            console.error("Error during submission:", error);
        }
    };
    


    return (

        <>

            <Toaster   />
            <div className="max-w-lg mx-auto mt-[3rem]  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
                <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Welcome to Our Hotel </h1>
                <form onSubmit={handleSubmit(onSubmit)} action="#" className='w-full' >
                    <div className="w-full grid grid-cols-1  gap-4 mb-5">
                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="fistname" className="text-sm text-gray-700 dark:text-gray-200 mr-2">First Name </label>
                            <input type="text" {...register("firstname")}  className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                            <span className='text-red-300'>
                                {errors.firstname && <p>{errors.firstname.message}</p>}
                            </span>
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="lastName" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Last Name:</label>
                            <input type="text" {...register("lastname")}  className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                            <span className='text-red-300'>
                                {errors.lastname && <p>{errors.lastname.message}</p>}
                            </span>
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email </label>
                            <input type="email" {...register("email")}  className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />

                            <span className='text-red-300'>
                                {errors.email && <p>{errors.email.message}</p>}
                            </span>
                        </div>
                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Address </label>
                            <input type="text" {...register("address")}  className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                            <span className='text-red-300'>
                                {errors.address && <p>{errors.address.message}</p>}
                            </span>
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password </label>
                            <input type="password" id="password" {...register("password")}  className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                            <span className='text-red-300'>
                                {errors.password && <p>{errors.password.message}</p>}
                            </span>
                        </div>

                        <div className="flex items-start flex-col justify-start">
                            <label htmlFor="confirmPassword" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Confirm Password </label>
                            <input type="password" id="confirmPassword"  {...register("ConfirmationPassword")} className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                            <span className='text-red-300'>
                                {errors.ConfirmationPassword && <p>{errors.ConfirmationPassword.message}</p>}
                            </span>
                        </div>
                    </div>

                    <button type="submit" className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" ${signinloading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={signinloading}  >           {signinloading ? 'Signing Up ...' : 'Sign Up'}</button>

                </form>


                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
                    <Link href="/login" className="text-blue-500 hover:text-blue-600">Login</Link>
                </div>

            </div>
        </>
    )

}

export default Register;