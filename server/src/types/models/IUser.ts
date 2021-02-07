import { Document } from "mongoose";

interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
}

// https://tomanagle.medium.com/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
export default IUser;
