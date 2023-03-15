import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  public form = {
    nom:null,
    email:null,
    phone:null,
    country:null,
    city:null
  }
  constructor(private client:ServiceClientService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.client.addClient(this.form).subscribe( 
      data => console.log(data)
      );
       this.form = {
        nom:null,
        email:null,
        phone:null,
        country:null,
        city:null
      }
  }

}
