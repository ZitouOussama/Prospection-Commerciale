import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/servises/jarwis.service';
import { TokenService } from 'src/app/servises/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servises/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null
  }
  constructor(
    private jarwis :JarwisService,
    private Token : TokenService,
    private Router : Router,
    private Auth : AuthService
    ) { }

  public error = null;

  ngOnInit(): void {
  }

  onSubmit(){
    this.jarwis.login(this.form).subscribe( 
      data => this.handleResponse(data),
      error => this.handelError(error),
      );
  }

  handleResponse(data){
    this.Token.handle(data.token);
    this.Auth.changeAuthStatus(true);
    this.Router.navigateByUrl('/profile');
  }

  handelError(error){
    this.error = error.error.message;
  }

}
