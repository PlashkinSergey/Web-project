import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { User } from "../../shared/models/user.model";
import { Message } from 'src/app/shared/models/message.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MyValidatorsService } from '../my-validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  messange!: Message;
  constructor (
    private router: Router,
    private elementRef: ElementRef,
    public userService: UserService,
    public authService: AuthService,
    public route: ActivatedRoute,
    private myValidators: MyValidatorsService
  ) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#03a9f4';
    this.messange = new Message("", "danger");
    this.route.queryParams.subscribe((params: Params)=>{
      if (params["nowCanLogin"]) {
        this.showMessange(new Message("Теперь вы можете зайти в систему", "success"));
      }
    })
    this.form = new FormGroup({
      "email": new FormControl(
        null,
        [Validators.required],
        [
          this.myValidators.CorrectPatternEmail.bind(this),
          this.myValidators.dogInEmail.bind(this)
        ]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  private showMessange(message: Message): void {
    this.messange = message;
    window.setTimeout(() => {
      this.messange.text = '';
    }, 5000)
  }
  public submit(): void {
    this.router.navigate(["/auth", 'registrations']);
  }
  public onSubmit(): void {
    const formData = this.form.value;
    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User | undefined) => {
        if(user) {
          if(user.password === formData.password) {
            this.messange.text = "";
            window.sessionStorage.setItem('user', JSON.stringify(user))
            this.authService.login();
            this.router.navigate(['/system', 'user']);
          } else {
            this.showMessange(new Message("Неверный пароль","danger"))
          }
        } else {
          this.showMessange(new Message("Такого пользователя нет", "danger"))
        }
      }
    )
  }
}
