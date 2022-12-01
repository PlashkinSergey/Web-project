import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    constructor() {}
    private isAuthLogIn: boolean = false;
    login(): void {
        this.isAuthLogIn = true;
    }
    logout(): void {
        this.isAuthLogIn = false;
        window.localStorage.clear();
    }
    public isLoggedIn(): boolean {
        return this.isAuthLogIn
    }
}