import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuafelListComponent } from './quafel-list/quafel-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { QafelaComponent } from './qafela/qafela.component';
import {MatRippleModule} from "@angular/material/core";

const routes: Routes = [
    {
        path: '',
        component: QuafelListComponent
    },
    {
        path: ':id',
        component: QafelaComponent
    },

];

@NgModule({
  declarations: [
    QuafelListComponent,
    QafelaComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        MatRippleModule
    ]
})
export class QTrackingModule { }
