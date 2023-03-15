import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public Users:any=null;
  name:string;
  imagePath='http://127.0.0.1:8000/public/image/'
  constructor(private user:UserService) { }

  ngOnInit() {
    this.showUsers(); 
  }

  showUsers(){
    this.user.showUser().subscribe(
      (data) =>{ 
        this.Users = data;
        console.log(this.Users);
      });
  }

  delete(user){
    this.user.deleteUser(user).subscribe( 
      data => this.showUsers()
    );
  }

  

}
