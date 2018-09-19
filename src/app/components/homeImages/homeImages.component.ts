import { Component, Input } from '@angular/core';
import { ImageProvider } from '../../services/imageProvider.service';

@Component({
  selector: 'home-image',
  templateUrl: './homeImages.component.html',
  styleUrls: ['./homeImages.component.css'],
})
export class HomeImages {
  @Input() srcImage: string;
  @Input() imgShift: string;
}
