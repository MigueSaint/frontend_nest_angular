import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private http=inject(HttpClient)
  //private authservice=inject(AuthService)
  //private router = inject(Router)
  
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.email, Validators.required]),
    password:new FormControl("", Validators.required)
  })
  funIngresar(){
    this.http.get("http://jsonplaceholder.typicode.com/todos/1").subscribe(
      (res)=>{
        console.log(res)
        this.router.navigate(["/admin"])
      },
      (error)=>{
        console.log(error)
      }
    )
    alert("Ingresando...")
  }

}
