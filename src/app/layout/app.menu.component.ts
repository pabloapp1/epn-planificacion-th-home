import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Paneles',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'E-Commerce',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/']
                    }
                ]
            },
            { separator: true },
            {
                label: 'Catálogos',
                icon: 'pi pi-th-large',//pi-briefcase
                items: [
                    {
                        label: 'Producto',
                        icon: 'pi pi-fw pi-briefcase',
                        items: [
                            {
                                label: 'Actividad',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['/catalogos/producto/actividad']
                            }
                        ]
                    },
                ]
            }
        ];
    }
}
