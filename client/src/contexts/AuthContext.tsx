import React, { createContext, useState } from "react";
import { IProduct } from "../types/IProduct";
import { IUser } from "../types/IUser";

type UserState = {
    user: IUser | null;
    cart: [IProduct] | null;
    saved: number;
    token: string | null;
};

export const initialState: UserState = {
    user: null,
    cart: null,
    saved: 0,
    token: null,
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const AuthContext = createContext([initialState, (_: any) => {}]);

export function AuthContextProvider({ children }: { children: React.ReactElement }): React.ReactElement {
    const [userState, setUserState] = useState(initialState);
    return <AuthContext.Provider value={[userState, setUserState]}>{children}</AuthContext.Provider>;
}
