import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  profileForm = new FormGroup({
      email: new FormControl(''),
            });
  constructor(
      public authService: AuthService
      ) { }

  ngOnInit() { }

  onSubmit() {
  console.log("Form submitted for " + this.profileForm.value.email);
  this.authService.ForgotPassword(this.profileForm.value.email);
  }

}
