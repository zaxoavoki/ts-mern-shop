import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as UserRepository from "../repositories/odm/UserRepository";
import IApiResponse from "../types/IApiResponse";

export async function login({ email, password }: { email: string; password: string }): Promise<IApiResponse<string>> {
    const user = await UserRepository.getOneByEmail(email);
    if (!user) {
        return { code: 404, response: { success: false, response: "User was not found" } };
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return { code: 403, response: { success: false, response: "Wrong password" } };
    }

    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET || "",
        {
            expiresIn: process.env.JWT_EXPIRESIN || "24h",
        },
    );

    return {
        code: 200,
        response: { success: true, response: token },
    };
}

export async function signup({
    email,
    name,
    password,
}: {
    email: string;
    name: string;
    password: string;
}): Promise<IApiResponse<string>> {
    const user = await UserRepository.getOneByEmail(email);
    if (user) {
        return { code: 405, response: { success: false, response: "User already exists" } };
    }

    // TODO: Add different salt rounds for each user
    const hash = await bcrypt.hash(password, +(process.env.PASSWORD_SALT_ROUNDS || "10"));
    const createdUser = await UserRepository.createUser(email, name, hash);

    if (!createdUser) {
        return { code: 500, response: { success: false, response: "Something went wrong" } };
    }

    const token = jwt.sign(
        {
            id: createdUser.id,
            name: createdUser.name,
            email: createdUser.email,
        },
        process.env.JWT_SECRET || "",
        {
            expiresIn: process.env.JWT_EXPIRESIN || "24h",
        },
    );

    return {
        code: 201,
        response: { success: true, response: token },
    };
}
