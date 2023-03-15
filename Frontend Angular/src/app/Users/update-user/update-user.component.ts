import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  files:File = null;
  form = {
    name:null,
    email:null,
    password:null,
    phone:null,
    role:null,
    adress:null,
    image_src:null
  }
  Roles:any=[];
  imagePath='http://127.0.0.1:8000/public/image/'
  url:any= '../../assets/images/noImage.png';
  data:any;
  id:any;
  constructor(
    private user:UserService,
    private route:Router,
    private router:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.getRole();
    this.onSubm();
  }

  onSelectFile(e){
    this.files = e.target.files[0];
    if(e.target.files){
      this.files = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=>{
        this.url = event.target.result;
      }
    }
  }

  getRole(){
    this.user.getRole().subscribe( data =>{this.Roles = data});
  }

  onSubm(){
    this.user.getUser(this.id).subscribe(
      res =>{
        this.data = res;
        this.form = this.data;
      }
    )
  }

  onSubmit(){
    let formdata = new FormData();
    formdata.append("file",this.files,this.files.name);
    formdata.append("data",JSON.stringify(this.form));
    this.user.updateUser(formdata).subscribe( 
      data => this.handle()
      );
    
  }

  handle(){
    
    this.route.navigateByUrl('/detailsUser');
  }

}
