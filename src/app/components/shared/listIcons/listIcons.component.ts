import { Component, Input } from '@angular/core';

@Component({
  selector: 'listIcon',
  templateUrl: './listIcons.component.html',
  styleUrls: ['./listIcons.component.css']
})
export class ListIcons {
  @Input() selected: boolean;
  ngOnChanges(changes) {
    this.selected = changes.selected.currentValue;
  }
}
