'use client';

import { useState } from "react";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {

    const [variant, setVariant] = useState<Variant>('LOGIN');

    return (
        <h4>Hello Auth Form</h4>
    )

}

export default AuthForm;