import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private auth: AuthService,
    public toast: ToastrService
  ) {
   }
  ngOnInit() {
  }

  ngAfterViewInit() {
    // const script = document.createElement('script');
    // script.src = '../../assets/app/js/gauge.min.js';
    // document.body.appendChild(script);
  }
}
