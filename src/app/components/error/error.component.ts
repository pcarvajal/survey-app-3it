import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() customError: string = history.state.data;;

  constructor() { }

  ngOnInit(): void {
  }

  receiveCustomError($event: string) {
    this.customError= $event
   }

}
