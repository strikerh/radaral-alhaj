import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us/about-us.component';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { PolicyComponent } from './policy/policy.component';
import { AboutHamlaComponent } from './about-hamla/about-hamla.component';

const routes: Routes = [
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'policy',
        component: PolicyComponent
    },
    {
        path: 'about-hamla',
        component: AboutHamlaComponent
    },


];

@NgModule({
    declarations: [
        AboutUsComponent,
        PolicyComponent,
        AboutHamlaComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class PagesModule {
}
