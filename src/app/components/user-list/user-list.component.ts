import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // Ensure HttpClientModule is correctly added here
  providers: [UserService],                   // Provide UserService if it uses HttpClient
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
  this.userService.getUsers().subscribe(data => {
  this.users = data;
  });
  }}
