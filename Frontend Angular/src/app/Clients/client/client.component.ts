import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public Clients:any=[];
  constructor(private client:ServiceClientService) { }

  name:string;
  p:number=1;
  ngOnInit() {
    this.onSubmit();
  }

  onSubmit(){
    this.client.showClient().subscribe( 
      (data) =>{ //console.log(data)
      this.Clients = data;
    });
  }
  delete(client){
    this.client.deleteClient(client).subscribe( 
      data => this.onSubmit()
    );
  }

 

}
