import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  styleUrls: ['./servicedetail.component.css']
})
export class ServicedetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src="./assets/js/main.js";
    document.body.appendChild(script);
  }

}
