import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/core";
const ELEMENT_DATA = [
    { name: 'Hydrogen' },
    { name: 'Helium' },
    { name: 'Lithium' },
    { name: 'Beryllium' },
    { name: 'Boron' },
    { name: 'Carbon' },
    { name: 'Nitrogen' },
    { name: 'Oxygen' },
    { name: 'Fluorine' },
    { name: 'Neon' },
];
/**
 * @title Tables with Material Design ripples.
 */
export class TableWithRipplesExample {
    constructor() {
        this.displayedColumns = ['name'];
        this.dataSource = ELEMENT_DATA;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: TableWithRipplesExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: TableWithRipplesExample, isStandalone: true, selector: "table-with-ripples-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n", dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatRippleModule }, { kind: "directive", type: i2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: TableWithRipplesExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-with-ripples-example', standalone: true, imports: [MatTableModule, MatRippleModule], template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFdkQsTUFBTSxZQUFZLEdBQUc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO0lBQ2xCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7SUFDakIsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDO0lBQ25CLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztJQUNmLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7SUFDbEIsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ2hCLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztJQUNsQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7Q0FDZixDQUFDO0FBRUY7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBT0UscUJBQWdCLEdBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxlQUFVLEdBQUcsWUFBWSxDQUFDO0tBQzNCOzhHQUhZLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHNGQzFCcEMsbWRBU0EsMkNEZVksY0FBYyxnaENBQUUsZUFBZTs7MkZBRTlCLHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FFMUIsSUFBSSxXQUNQLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UmlwcGxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuY29uc3QgRUxFTUVOVF9EQVRBID0gW1xuICB7bmFtZTogJ0h5ZHJvZ2VuJ30sXG4gIHtuYW1lOiAnSGVsaXVtJ30sXG4gIHtuYW1lOiAnTGl0aGl1bSd9LFxuICB7bmFtZTogJ0JlcnlsbGl1bSd9LFxuICB7bmFtZTogJ0Jvcm9uJ30sXG4gIHtuYW1lOiAnQ2FyYm9uJ30sXG4gIHtuYW1lOiAnTml0cm9nZW4nfSxcbiAge25hbWU6ICdPeHlnZW4nfSxcbiAge25hbWU6ICdGbHVvcmluZSd9LFxuICB7bmFtZTogJ05lb24nfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlcyB3aXRoIE1hdGVyaWFsIERlc2lnbiByaXBwbGVzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS13aXRoLXJpcHBsZXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUYWJsZU1vZHVsZSwgTWF0UmlwcGxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVXaXRoUmlwcGxlc0V4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnbmFtZSddO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xufVxuIiwiPG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDxtYXQtaGVhZGVyLWNlbGwgbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvbWF0LWhlYWRlci1jZWxsPlxuICAgIDxtYXQtY2VsbCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC9tYXQtY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9tYXQtaGVhZGVyLXJvdz5cbiAgPG1hdC1yb3cgbWF0UmlwcGxlICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvbWF0LXJvdz5cbjwvbWF0LXRhYmxlPlxuIl19