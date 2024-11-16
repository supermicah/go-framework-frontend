declare namespace API {
    type Captcha = {
        /** Captcha ID */
        captcha_id?: string;
    };

    type LoginForm = {
        /** Captcha verify code */
        captcha_code: string;
        /** Captcha verify id */
        captcha_id: string;
        /** Login password (md5 hash) */
        password: string;
        /** Login name */
        username: string;
    };

    type LoginToken = {
        /** Access token (JWT) */
        access_token?: string;
        /** Expired time (Unit: second) */
        expires_at?: number;
        /** Token type (Usage: Authorization=${token_type} ${access_token}) */
        token_type?: string;
    };

    type UpdateLoginPassword = {
        /** New password (md5 hash) */
        new_password: string;
        confirm_password?: string;
        /** Old password (md5 hash) */
        old_password: string;
    };
}