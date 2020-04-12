import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
selector: 'app-sign-in',
templateUrl: './sign-in.component.html',
styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  profileForm = new FormGroup({
      email: new FormControl(''),
          password: new FormControl(''),
            });
  constructor(
      public authService: AuthService
      ) { }

  ngOnInit() { }

  onSubmit() {
  console.log("Form submitted for " + this.profileForm.value.email);
  this.authService.SignIn(this.profileForm.value.email,this.profileForm.value.password);
  }

}
