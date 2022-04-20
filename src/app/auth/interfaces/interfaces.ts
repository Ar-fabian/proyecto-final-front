export interface AuthResponse{
    user?: AuthUser;
    token?: string;
    msg?: string;
    ok: boolean;
}
export interface AuthUser{
    name?: string;
    email?: string;
    ok: boolean;
    uid?: string;
}
export interface User{
    uid:string;
    name:string;
    email:string;
}