import { Component } from '@angular/core';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent {
    profileInfo: any = {
        name: 'حازم صفوت',
        mobile: '0532754598',
        mobile2:'0502448772',
        age: '37',
        disabled: false,
        medicalCase: 'لا يوجد',
        info: 'خانة اختيارية اضيف فيها اي معلوماة أيرد اد اضيفها',

    };

    hamlaInfo: any = {
        name: 'حاملة الراجحي',
        mobile: '0532754598',
        homeAddress: 'فندق كذا, طريق فلاني, بحي كذة ',
        target: 'الحرم المكي',
        tripLeaderName: 'فلان الفلاني',
        tripLeaderMobile: '0504578965',


    };

}
