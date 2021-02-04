import UserRepository from "../repositories/UserRepository";

class AuthService {
    async login({ email, password }: { email: string; password: string }) {
        const user = await UserRepository.getOneByEmail(email);
        if (user) {
            // generate jwt;
        }

        return { status: 404, response: { error: "User was not found" } };
    }

    async signup({ email, name, password }: { email: string; name: string; password: string }) {
        const user = await UserRepository.getOneByEmail(email);
        if (user) {
            return { status: 405, response: { error: "User already exists" } };
        }

        // add to db
    }
}

export default new AuthService();
