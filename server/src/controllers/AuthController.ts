import validator from "validator";
import AuthService from "../services/AuthService";

class AuthController {
    static async signup({
        name,
        email,
        password,
        password_confirmation,
    }: {
        email: string;
        name: string;
        password: string;
        password_confirmation: string;
    }): Promise<any> {
        const errors = [];
        if (validator.isEmpty(password || "")) {
            errors.push({ field: "password", message: "Password can not be empty" });
        }

        if (password !== password_confirmation) {
            errors.push({ field: "password", message: "Passwords must be equal" });
        }

        if (!validator.isEmail(email || "")) {
            errors.push({ field: "email", message: "Email is invalid" });
        }

        if (validator.isAlpha(name || "")) {
            errors.push({ field: "name", error: "Name is invalid" });
        }

        if (errors.length !== 0) {
            return { status: 422, response: { error: errors } };
        }

        return await AuthService.signup({ name, email, password });
    }

    static async login({ email, password }: { email: string; password: string }): Promise<any> {
        const errors = [];

        if (!validator.isEmail(email || "")) {
            errors.push({ field: "email", message: "Email is invalid" });
        }

        return await AuthService.login({ email, password });
    }
}

export default AuthController;
