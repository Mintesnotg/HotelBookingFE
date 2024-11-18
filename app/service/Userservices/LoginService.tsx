import { AuthenticatedResponse, LoginFormType, UserRegApiResponse } from '@/app/helpers/types';
import React from 'react'

const  LoginService = async (data :LoginFormType) :Promise<AuthenticatedResponse | undefined> => {

debugger;


     const response= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Account/Login` ,{

        method :'POST',
        headers :{'Content-Type':'application/json'},
        body: JSON.stringify(data)
     })


    //  var x=await response.json();
     const result: AuthenticatedResponse = await response.json();


    return result
}

export default LoginService
