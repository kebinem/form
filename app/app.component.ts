import { Component, Input, OnInit } from '@angular/core';

interface Data {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  send: boolean = false;
  data!: Data;
  title = 'form';

  check(e: any[]) {
    this.send = e[0];
    this.data = e[1];
  }

  ngOnInit(): void {}
}
