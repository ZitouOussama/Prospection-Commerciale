import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/servises/jarwis.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email:null
  }
  constructor(
    private jarvis: JarwisService
    ) { }

  ngOnInit(): void {
  }
  public error = null;
  onSubmit(){
    this.jarvis.sendResetPasswordLink(this.form).subscribe(
      data => this.handel(data),
      error => this.handelError(error),
    );
  }

  handel(data){
    console.log(data);
    this.form.email=null;
  }

  handelError(error){
    this.error = error.error.error;
  }

}
