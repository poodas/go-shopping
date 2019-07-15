import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.styl']
})
export class DialogContentComponent implements OnInit {
  @Input() public parentData;
  public setSrc;
  constructor() {}

  ngOnInit() {
      this.setSrc = this.parentData.imageSrc;
  }

  getSize() {
    
  }

}
