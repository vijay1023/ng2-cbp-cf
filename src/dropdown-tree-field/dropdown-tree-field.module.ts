﻿import { CommonModule }                 from '@angular/common';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { MaterialModule }               from '@angular/material';

import { DropdownTreeFieldComponent }   from './dropdown-tree-field.component';
import { DropdownTreeItemComponent }    from './dropdown-tree-item';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
    ],
    exports: [
        DropdownTreeFieldComponent,
    ],
    declarations: [
        DropdownTreeFieldComponent,
        DropdownTreeItemComponent,
    ],
})
export class DropdownTreeFieldModule {
}
