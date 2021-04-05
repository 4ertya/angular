import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private service: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProcess(): void {
    if (this.formGroup.valid) {
      this.service.login(this.formGroup.value).subscribe(result => {
        alert(result.email + '\n' + result.token);
      });
    }
  }
}
