export interface AdminAttributesResponse {
    data: {
        admin: {
            id: string;
            name: string;
            password: string;
            email: string;
            active: boolean;
        },
        token: string
    }
}

export interface AdminAttributesLoginParamsType {
    password: string;
    username: string;
}






