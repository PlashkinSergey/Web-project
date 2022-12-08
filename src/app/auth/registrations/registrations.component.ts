import { Component, ElementRef, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { MyValidatorsService } from '../my-validators.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private userService: UserService,
    private myValidators: MyValidatorsService
  ) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f43648';
    this.form = new FormGroup(
      {
        "email": new FormControl('', 
            [ 
              Validators.required, 
            ],
            [
              this.myValidators.dogInEmail.bind(this), 
              this.forbiddenEmails.bind(this), 
              this.myValidators.CorrectPatternEmail.bind(this)
            ]
          ),
        'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
        "name": new FormControl('', [Validators.required]),
      }
    )
  }
  onSubmit(): void {
    const formData = this.form.value;
    const user: User = new User(formData.name, formData.email, formData.password);
    this.userService.createUser(user).subscribe(() => {
      this.router.navigate(['/login'], {
        queryParams: {
          nowCanLogin: true
        }
      })
    })
  }
  submit():void {
    this.router.navigate(['/login']);
  }
  forbiddenEmails(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getUserByEmail(control.value)
      .subscribe((user: User | undefined)=>{
        if(user) {
          resolve({ forbiddenEmail: true });
        } else {
          resolve(null);
        }
      });
    });
  }
}
