import validator from "validator";
import * as AuthService from "../services/AuthService";
import IApiResponse from "../types/IApiResponse";

export async function signup({
    name,
    email,
    password,
}: {
    email: string;
    name: string;
    password: string;
}): Promise<IApiResponse<string>> {
    const errors = [];

    // TODO: Rewrite to get all errors in one time - helper
    if (validator.isEmpty(password || "")) {
        errors.push({ error: "password", message: "Password can not be empty" });
    }

    if (!validator.isEmail(email || "")) {
        errors.push({ error: "email", message: "Email is invalid" });
    }

    if (validator.isEmpty(name || "") || validator.isAlpha(name)) {
        errors.push({ error: "name", message: "Name is invalid" });
    }

    if (errors.length !== 0) {
        return { code: 422, response: { success: false, response: errors } };
    }

    return await AuthService.signup({ name, email, password });
}

export async function login({ email, password }: { email: string; password: string }): Promise<IApiResponse<string>> {
    const errors = [];

    if (!validator.isEmail(email || "")) {
        errors.push({ error: "email", message: "Email is invalid" });
    }

    if (errors.length !== 0) {
        return { code: 422, response: { success: false, response: errors } };
    }

    return await AuthService.login({ email, password });
}
