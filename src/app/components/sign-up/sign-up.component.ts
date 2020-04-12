import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
selector: 'app-sign-in',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  profileForm = new FormGroup({
      email: new FormControl(''),
          password: new FormControl(''),
          firstname: new FormControl(''),
          lastname: new FormControl(''),
            });
  constructor(
      public authService: AuthService
      ) { }

  ngOnInit() { }

  onSubmit() {
  console.log("Form submitted for " + this.profileForm.value.email);
  this.authService.SignUp(this.profileForm.value.email,this.profileForm.value.password);
  }

}
