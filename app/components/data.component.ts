import { Component, Input, OnInit } from '@angular/core';

interface Data {
  [key: string]: string;
}

@Component({
  selector: 'app-data',
  templateUrl: 'data.component.html',
  styleUrls: ['data.component.css'],
})
export class DataComponent implements OnInit {
  @Input() data!: Data;
  
  constructor() {}

  ngOnInit(): void {}
}
