import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicProfileComponent} from './public-profile/public-profile.component';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";


const routes: Routes = [
    {
        path: '',
        component: PublicProfileComponent
    },


];

@NgModule({
    declarations: [
        PublicProfileComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatIconModule
    ]
})
export class PublicProfileModule {
}
