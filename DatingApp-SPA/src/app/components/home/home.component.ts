import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(registermode: boolean) {
    this.registerMode = registermode;
  }
}
