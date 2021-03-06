﻿import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { MaterialModule }       from '@angular/material';

import { ListGroupModule }      from '../list-group';
import { DualListComponent }    from './dual-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ListGroupModule,
    ],
    exports: [
        DualListComponent,
    ],
    declarations: [
        DualListComponent,
    ],
})
export class DualListModule {
}
