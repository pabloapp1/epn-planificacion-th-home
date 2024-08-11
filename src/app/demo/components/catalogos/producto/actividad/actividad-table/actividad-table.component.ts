import {Component, OnInit} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {FieldsetModule} from "primeng/fieldset";
import {InputTextModule} from "primeng/inputtext";
import {MenuModule} from "primeng/menu";
import {PanelModule} from "primeng/panel";
import {MenuItem, SharedModule} from "primeng/api";
import {SplitButtonModule} from "primeng/splitbutton";
import {SplitterModule} from "primeng/splitter";
import {TabViewModule} from "primeng/tabview";
import {ToolbarModule} from "primeng/toolbar";
import {ChipModule} from "primeng/chip";
import {DropdownModule} from "primeng/dropdown";
import {EditorModule} from "primeng/editor";
import {FileUploadModule} from "primeng/fileupload";
import {InputSwitchModule} from "primeng/inputswitch";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {RippleModule} from "primeng/ripple";
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {Table, TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {ProductActivity} from "../domain/productActivity";
import {ProductVolumen} from "../domain/productVolumen";
import {ProductVolumenService} from "../services/ProductVolumenService";
import {ProductActivityService} from "../services/ProductActivityService";

@Component({
  selector: 'app-actividad-table',
  standalone: true,
    imports: [
        AccordionModule,
        ButtonModule,
        DividerModule,
        FieldsetModule,
        InputTextModule,
        MenuModule,
        PanelModule,
        SharedModule,
        SplitButtonModule,
        SplitterModule,
        TabViewModule,
        ToolbarModule,
        ChipModule,
        DropdownModule,
        EditorModule,
        FileUploadModule,
        InputSwitchModule,
        NgForOf,
        NgIf,
        PaginatorModule,
        RippleModule,
        DataViewModule,
        CurrencyPipe,
        RatingModule,
        TableModule,
        MultiSelectModule
    ],
providers: [ProductVolumenService, ProductActivityService],
  templateUrl: './actividad-table.component.html',
  styleUrl: './actividad-table.component.scss'
})
export class ActividadTableComponent implements OnInit{
    items: MenuItem[] = [];
    cardMenu: MenuItem[] = [];
    listProductsActivity!: ProductActivity[];
    creating: boolean = false;
    listCreateProductsActivity!: ProductActivity[];
    listProductsVolumen!: ProductVolumen[];
    selectedProductVolumen!: ProductVolumen;
    clonedProducts: { [s: string]: ProductActivity } = {};
    productActivity!: ProductActivity;
    productDialog: boolean = false;

    constructor(private productVolumenService :ProductVolumenService,
                private productActivityService:ProductActivityService
                ) {
    }

    ngOnInit(): void {
        this.items = [
            { label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'pi pi-bookmark', routerLink: ['/theming'] }
        ];

        this.cardMenu = [
            {
                label: 'Save', icon: 'pi pi-fw pi-check'
            },
            {
                label: 'Update', icon: 'pi pi-fw pi-refresh'
            },
            {
                label: 'Delete', icon: 'pi pi-fw pi-trash'
            },
        ];

        this.listarProductVolumen();
        this.listarProductoActividad();
    }

    listarProductVolumen(){
        console.info("Va a cargar")
        this.productVolumenService.getProductsVolumen().then(
            (data) => {
                console.warn("ProductoVollumen es: ", data)
                this.listProductsVolumen = data;
            }
        );
    }

    listarProductoActividad(){
        this.productActivityService.listar().subscribe({
            next: (data: any) => {
                console.log("Mira la data: ", data.listado);
                this.listProductsActivity = data.listado;
            }, error: (err) => console.log(err)
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    onRowEditInit(productActivity: ProductActivity) {
        this.clonedProducts[productActivity.idActividad as number] = { ...productActivity };
    }

}
