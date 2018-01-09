import { Component, Input,  OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  constructor(private usersService: UsersService,
              private counterService: CounterService){ }
  users: string[] = [];  

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    ++this.counterService.counter;
  }

  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }
}
