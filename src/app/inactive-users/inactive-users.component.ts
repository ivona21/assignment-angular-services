import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  constructor(private usersService: UsersService,
              private counterService: CounterService){}
 
  users: string[] = [];
 
  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    ++this.counterService.counter;
  }

  ngOnInit(){  
    this.users = this.usersService.inactiveUsers;   
  }
}
