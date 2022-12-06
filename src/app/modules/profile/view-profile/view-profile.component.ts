import { Component } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent {
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
        name: 'حملة الراجحي',
        mobile: '0532754598',
        homeAddress: 'فندق السلام، ابراهيم الخليل، الحرم، مكة المكرمة',
        target: 'الحرم المكي',
        tripLeaderName: 'خالد عبدالله',
        tripLeaderMobile: '0504578965',
    };
}
