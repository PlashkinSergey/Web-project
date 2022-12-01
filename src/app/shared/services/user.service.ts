import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  public getUserByEmail(email: string): Observable<User | undefined> {
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`).pipe(
      map((user: User[]) => user[0] ? user[0] : undefined)
    )
  }
  public createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }
}
