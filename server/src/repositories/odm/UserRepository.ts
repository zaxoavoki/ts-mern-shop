import User from "../../models/odm/User";
import IUser from "../../types/models/IUser";

export async function getOneByEmail(email: string): Promise<IUser | null> {
    try {
        return await User.findOne({ email });
    } catch (e) {
        return null;
    }
}

export async function createUser(email: string, name: string, password: string): Promise<IUser | null> {
    try {
        return await User.create({ email, name, password });
    } catch (e) {
        return null;
    }
}
