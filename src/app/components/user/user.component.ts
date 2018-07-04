import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 30;
    this.address = {
      street: "main 50",
      city: "NYork",
      state: "NY"
    };
    this.hobbies = ["Music", "bike", "coding"];
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick(){
    this.email = "bla@foo.com";
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(hobby: string) {
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address {
  street:string,
  city:string,
  state:string,
}

interface Post {
  id: string,
  title: string,
  body: string,
}
