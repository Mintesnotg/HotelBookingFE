import { LoginFormType } from './types'

import z, { string } from 'zod'

export const loginschema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "password must be at least 8 characters long" })

})


const passwordSchema = z
    .string()
    .min(8, { message: " Minimum password length is 8 " })
    .max(20, { message: "20 is Maximum password length" })
    .refine((password) => /[A-Z]/.test(password), {
        message: "Please include two or more uppercases",
    })
    .refine((password) => /[a-z]/.test(password), {
        message: "Please include lowercases",
    })
    .refine((password) => /[0-9]/.test(password), {
        message: "Please include  numbers"
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
        message: "Please include special charcters",
    }).refine((password) => {
        const upperCaseCount = (password.match(/[A-Z]/g) || []).length;
        const lowerCaseCount = (password.match(/[a-z]/g) || []).length;
        const numberCount = (password.match(/[0-9]/g) || []).length;
        const specialCharCount = (password.match(/[!@#$%^&*]/g) || []).length;
        return upperCaseCount > 0 && lowerCaseCount > 0 && numberCount > 0 && specialCharCount > 0;
    }, {
        message: "password must have uppercase,lowercase,special character and number",
    });


export const PasswordSchema = z.object({

    Password: passwordSchema,
    ConfirmationPassword: z.string()

}).refine((data) => data.Password === data.ConfirmationPassword, {
    message: "Passwords do not match",
    path: ['ConfirmationPassword']
});
export const registerschema = z.object({

    fistname: string().min(1, { message: "first name is required" }),
    email: string().email({ message: "email is not valid" }),
    password: passwordSchema,
    ConfirmationPassword: z.string()


}).refine((data) => data.password === data.ConfirmationPassword, {
    message: "Passwords do not match",
    path: ['ConfirmationPassword']
});




// export type LoginFormType = z.infer<typeof loginschema>;
