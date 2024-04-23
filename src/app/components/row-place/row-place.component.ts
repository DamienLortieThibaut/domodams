import { Component, Input  } from '@angular/core';
import { Place } from '../../models/place';

@Component({
  selector: 'app-row-place',
  templateUrl: './row-place.component.html',
  styleUrl: './row-place.component.scss'
})
export class RowPlaceComponent {
  @Input() place: Place;
}
