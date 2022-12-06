import { Component } from '@angular/core';

@Component({
  selector: 'app-qafela',
  templateUrl: './qafela.component.html',
  styleUrls: ['./qafela.component.scss']
})
export class QafelaComponent {

    tripInfo = {
        id:'6413664',
        arrival: 'الحرم المكي',
        status: 'بدأت',
        dateTime: '2022-12-01T06:00:00z',
        tripLeader: 'فهد عبدالله',
        tripLeaderMobile: '0532754598',
        description: '',
        shairaDescription: 'عند الوصول إلى مكة\n' +
            'طواف القدوم سبعة أشواط للمفرد والقارن، ثم يصلي ركعتي الطواف خلف مقام إبراهيم إن تيسر، ويجوز لهما تقديم سعي الحج بعد هذا الطواف، فلا يكون عليهما سعي بعد ذلك. ولا يحلقان شيئاً من الشعر بل يبقيان على الإحرام حتى يحين الذهاب للمشاعر.\n' +
            'المتمتع يطوف ويسعى ويقصر من شعره ويتحلل، فإذا حان وقت الذهاب للمشاعر ليلة الثامن يحرم بالحج من مكة.\n' + '<br>' +
            'المرجع: ' +
            '<a href="https://www.haj.gov.sa/ar/InternalPages/Haj"> https://www.haj.gov.sa/ar/InternalPages/Haj</a>',
        joiners: ['asd','asd','asd','asd','asd',],

    }
    mapOptions:  google.maps.MapOptions = {
        center: {lat: 21.4367611, lng: 39.7836277},
        zoom: 12,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false
    };
}
