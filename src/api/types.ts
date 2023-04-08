export interface LoginAndSigninParam {
    username: string
    password: string
    rePassword?: string
}

export interface Response<Data = any, Msg = string> {
    data: Data
    msg: Msg
}
