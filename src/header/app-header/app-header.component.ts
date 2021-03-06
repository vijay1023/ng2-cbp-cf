﻿/* tslint:disable:no-access-missing-member */
import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
}                           from '@angular/core';
import { ObservableMedia }  from '@angular/flex-layout';

import { BaseHeader }       from '../base-header.model';

@Component({
    selector: 'cf-app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppHeaderComponent extends BaseHeader {
    @Input() disableSearch: boolean = false;

    @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();

    searchText: string = '';

    constructor(media: ObservableMedia) {
        super(media);
    }
}
/* tslint:enable */
