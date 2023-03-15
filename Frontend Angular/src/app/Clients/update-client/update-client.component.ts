import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceClientService } from 'src/app/services/service-client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {

  id:any;
  public form = {
    name:null,
    email:null,
    phone:null,
    photo:null,
    country:null,
    city:null
  }
  data:any;
  constructor( 
    private router:ActivatedRoute,
    private service:ServiceClientService,
    private route:Router
    ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.onSubm();
  }

  onSubm(){
    this.service.getClient(this.id).subscribe(
      res =>{
        this.data = res;
        this.form = this.data;
      }
    )
  }

  onSubmit(){
    //console.log(this.form);
    this.service.updateClient(this.form).subscribe(
      res => this.handle()
    )
  }

  handle(){
    
    this.route.navigateByUrl('/detailsClient');
  }
}
