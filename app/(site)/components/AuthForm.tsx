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
        <h4>Hello Auth Form</h4>
    )

}

export default AuthForm;