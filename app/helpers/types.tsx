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
    firstname:string;
    ConfirmationPassword: string;
};

export type UserRegApiResponse = {
    message?: string;
    status?: number;
};


