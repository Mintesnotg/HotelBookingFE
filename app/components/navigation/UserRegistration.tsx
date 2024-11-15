import { RegisterFormType, UserRegApiResponse } from '@/app/helpers/types';
import React from 'react'

const  UserRegistration = async (data :RegisterFormType) :Promise<UserRegApiResponse> => {

debugger;


     const response= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Account/Register` ,{

        method :'POST',
        headers :{'Content-Type':'application/json'},
        body: JSON.stringify(data)
     })

     const result: UserRegApiResponse = await response.json();

    // if (!response.ok) {
    //     return result

    // }

    return result
}

export default UserRegistration
