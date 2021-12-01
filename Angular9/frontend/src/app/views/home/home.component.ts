import { HeaderService } from './../../service/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: HeaderService
  ) { 
    service.headerData = {
      title: 'Inicio',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
