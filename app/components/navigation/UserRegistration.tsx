import { RegisterFormType, UserRegApiResponse } from '@/app/helpers/types';
import React from 'react'

const  UserRegistration = async (data :RegisterFormType) :Promise<UserRegApiResponse> => {

debugger;

    console.log(`  base url is ${process.env.NEXT_PUBLIC_BASE_URL}` )
     const response= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Account/Register` ,{

        method :'POST',
        headers :{'Content-Type':'application/json'},
        body: JSON.stringify(data)
     })

     const result: UserRegApiResponse = await response.json();

    if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');

    }

    return result
}

export default UserRegistration
