import { Component } from '@angular/core';

@Component({
  selector: 'app-quafel-list',
  templateUrl: './quafel-list.component.html',
  styleUrls: ['./quafel-list.component.scss']
})
export class QuafelListComponent {

    mapOptions:  google.maps.MapOptions = {
        center: {lat: 21.4367611, lng: 39.7836277},
        zoom: 12,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false
    };
}
