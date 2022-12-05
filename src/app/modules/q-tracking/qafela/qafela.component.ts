import { Component } from '@angular/core';

@Component({
  selector: 'app-qafela',
  templateUrl: './qafela.component.html',
  styleUrls: ['./qafela.component.scss']
})
export class QafelaComponent {

    tripInfo = {
        id:'6413664',
        arrival: 'مناء',
        status: 'بدأت',
        dateTime: '2022-12-01T06:00:00z',
        tripLeader: 'حازم صفوت',
        tripLeaderMobile: '0532754598',
        description: '',
        shairaDescription: 'تأسست حملة الراجحي الخيرية منذ عام 1391 هـ.\n' +
            'تعمل حملة الراجحي الخيرية علي الاستفادة من التقنيات الحديثة المستخدمة إدارياً في مثل هذه الأعمال ولكي يتسنى لجميع الإدارات العمل بانسيابية في المهام الموكلة إليهم،كما تحرص الحملة على اختيار موظفيها من أصحاب الكفاءات والقدرات العالية في فن التعامل مع الغير ,عملاً بقوله تعالى (إن خير من استأجرت القوي الأمين).',
        joiners: ['asd','asd','asd','asd','asd',],

    }
}
