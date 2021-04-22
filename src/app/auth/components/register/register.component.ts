import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private service: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeated_password: new FormControl('', [Validators.required])
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(g: FormGroup): { [key: string]: boolean } | null {
    return g.get('password').value === g.get('repeated_password').value
      ? null : {mismatch: true};
  }

  loginProcess(): void {
    if (this.formGroup.valid) {
      this.service.login(this.formGroup.value).subscribe(result => {
        alert(result.email + '\n' + result.token);
      });
    }
  }


}
