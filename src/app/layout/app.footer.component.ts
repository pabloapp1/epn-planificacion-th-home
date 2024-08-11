import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
})
export class AppFooterComponent {
    currentDate: Date;
    constructor(public layoutService: LayoutService) {
        this.currentDate = new Date();
    }

    get logo() {
        return this.layoutService.config().colorScheme === 'light'
            ? 'dark'
            : 'white';
    }
}
