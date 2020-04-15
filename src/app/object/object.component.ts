import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

  gone = false;

  @Input() todo:{label:string, done:boolean, priority: number};

  constructor() { }

  ngOnInit() {
  }

  tickIt(){
    this.gone = !this.gone;
  }
}
