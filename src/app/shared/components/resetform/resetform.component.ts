import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetform',
  templateUrl: './resetform.component.html',
  styleUrls: ['./resetform.component.scss']
})
export class ResetformComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  isValidFormSubmitted = true;

  resetForm = this.fb.group({
    email: ['', Validators.pattern(this.emailPattern)]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  reset() {
    console.log(this.resetForm.invalid)
    this.isValidFormSubmitted = false;
    if (this.resetForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.goTo('login');
  }

  get email() {
    return this.resetForm.get('email');
  }

  goTo(item:string){
    this.router.navigateByUrl(`/${item}`);
  }
  ngOnInit(): void {
  }

}
