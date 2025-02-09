export interface AdminAttributesResponse {
    id: string;
    name: string;
    password: string;
    email: string;
    active?: boolean;
}

export interface AdminAttributesLoginParamsType {
    password: string;
    username: string;
}






