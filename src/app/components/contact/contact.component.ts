import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  registerForm: FormGroup =  new FormGroup({
    name: new FormControl("",[ Validators.required, Validators.minLength(3), Validators.maxLength(10)],),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^\w{6,}$/)]),
    rePassword: new FormControl("", [Validators.required, Validators.pattern(/^\w{6,}$/)]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  hadnleForm():void{
    console.log(this.registerForm.value)
  }
}
