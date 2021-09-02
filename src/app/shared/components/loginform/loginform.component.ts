import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  errorMessage?:string;

  loginForm = this.fb.group({
    email: ['', Validators.pattern(this.emailPattern)],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = "Email or password is not valid!"
    }else{
      if (this.loginForm.value.email === "mikro@mikro.com.tr" && this.loginForm.value.password === "123456") {
        this.goTo('home');      
      }else{
        this.errorMessage = "Email or password is wrong!"
      }
    }
  }

  goTo(item:string){
    this.router.navigateByUrl(`/${item}`);
  }
  ngOnInit(): void {
  }

}
