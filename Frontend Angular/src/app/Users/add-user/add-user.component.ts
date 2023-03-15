import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  files:File = null;
  form = {
    name:null,
    email:null,
    password:null,
    phone:null,
    role:null,
    adress:null
  }

  Roles:any=[];
  url:any= '../../assets/images/noImage.png';
  constructor( 
    private user:UserService,
    ) { }

  ngOnInit() {
    this.getRole();
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

  onSubmit(){
    let formdata = new FormData();
    formdata.append("file",this.files,this.files.name);
    formdata.append("data",JSON.stringify(this.form));
    this.user.addUser(formdata).subscribe( 
      data => console.log(data)
      );
      //console.log(this.files);
      this.form = {
        name:null,
        email:null,
        password:null,
        phone:null,
        role:null,
        adress:null
      }
  }


  getRole(){
    this.user.getRole().subscribe( data =>{this.Roles = data});
  }

  

}
