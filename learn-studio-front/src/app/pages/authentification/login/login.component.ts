import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter<boolean>();

  emailFormControl = new FormControl('', [

    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  public hide: boolean;


  constructor(private router: Router) {
    this.hide = true;
  }

  ngOnInit(): void {
  }

  connect(): void {
    if (!this.emailFormControl.invalid && !this.passwordFormControl.invalid) {
      // TODO request login -> this.emailFormControl.value, this.passwordFormControl.value
      this.router.navigate(['/learn']);
    }

    // TODO drop following line
    this.router.navigate(['/learn']);
  }

}
