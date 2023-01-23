import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    constructor() {}
    private isAuthLogIn: boolean = false;
    public login(): void {
        this.isAuthLogIn = true;
    }
    public logout(): void {
        this.isAuthLogIn = false;
        window.sessionStorage.clear();
    }
    public isLoggedIn(): boolean {
        return this.isAuthLogIn
    }
}
