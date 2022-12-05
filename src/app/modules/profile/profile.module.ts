import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewProfileComponent} from './view-profile/view-profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
    {
        path: '',
        component: ViewProfileComponent
    },
    {
        path: 'edit',
        component: EditProfileComponent
    },

];

@NgModule({
    declarations: [
        ViewProfileComponent,
        EditProfileComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class ProfileModule {
}
