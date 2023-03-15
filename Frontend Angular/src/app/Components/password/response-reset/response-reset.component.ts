import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JarwisService } from 'src/app/servises/jarwis.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error:any =[""];
  public form = {
    email:null,
    password:null,
    password_confirmation:null,
    resetToken:null
  }
  constructor(
    private route:ActivatedRoute,
    private jarvis:JarwisService,
    private router:Router,
  ) { 
    this.route.queryParams.subscribe(params => {
      this.form.resetToken = params['token'];
    })
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.jarvis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    let _router = this.router;
    _router.navigateByUrl('/login');
  }

  handleError(error){
    this.error = error.error.errors;
  }

}
