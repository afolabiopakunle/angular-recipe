import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showItem = new EventEmitter<string>()


  sendView(view: string) {
    this.showItem.emit(view)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
