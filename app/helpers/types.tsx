export type LoginFormType = {
    email: string;
    password: string;
};

export type RegisterFormType = {
    name: string;
    email: string;
    password: string;
    address:string;
    lastname:string;
    fistname:string;
    ConfirmationPassword: string;
};

export type ApiResponse = {
    message?: string;
    error?: string;
};


