'use client';

import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {

    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant == 'REGISTER') {
            //call axois register
        }
        if (variant == 'LOGIN') {
            //Call NextAuth lib
        }
    }

    const socialAction = (action: string) => {
        //nextAuth Social login
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-3">
            <div className="bg-white px-4 py-8 rounded-lg shadow sm:px-10">

            </div>
        </div>
    )

}

export default AuthForm;