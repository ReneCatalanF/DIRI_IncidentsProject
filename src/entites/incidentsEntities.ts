export interface Incident {
    id: number,
    fecha: string | undefined,
    assignedUser: string,
    title: string,
    path: string,
    status: boolean
}

export interface User {
    uid: string;
    email: string;
    roles: {
        admin: boolean;
    };
}