import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * @title Flex table where one column's cells has a greater height than others.
 */
class TableFlexLargeRowExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TableFlexLargeRowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TableFlexLargeRowExample, selector: "table-flex-large-row-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>", styles: [".mat-mdc-table {\n  width: 100%;\n  max-height: 500px;\n  overflow: auto;\n}\n\n.mat-column-name {\n  height: 100px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] }); }
}
export { TableFlexLargeRowExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TableFlexLargeRowExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-flex-large-row-example', template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>", styles: [".mat-mdc-table {\n  width: 100%;\n  max-height: 500px;\n  overflow: auto;\n}\n\n.mat-column-name {\n  height: 100px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmxleC1sYXJnZS1yb3ctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWZsZXgtbGFyZ2Utcm93L3RhYmxlLWZsZXgtbGFyZ2Utcm93LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1mbGV4LWxhcmdlLXJvdy90YWJsZS1mbGV4LWxhcmdlLXJvdy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBU3hDLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFLYSx3QkFBd0I7SUFMckM7UUFNRSxxQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBRyxZQUFZLENBQUM7S0FDM0I7OEdBSFksd0JBQXdCO2tHQUF4Qix3QkFBd0Isb0VDOUJyQyw4bkNBMkJZOztTREdDLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBGbGV4IHRhYmxlIHdoZXJlIG9uZSBjb2x1bW4ncyBjZWxscyBoYXMgYSBncmVhdGVyIGhlaWdodCB0aGFuIG90aGVycy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtZmxleC1sYXJnZS1yb3ctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1mbGV4LWxhcmdlLXJvdy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWZsZXgtbGFyZ2Utcm93LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRmxleExhcmdlUm93RXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbn1cbiIsIjxtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L21hdC1oZWFkZXItY2VsbD5cbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L21hdC1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvbWF0LWhlYWRlci1jZWxsPlxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC9tYXQtY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L21hdC1oZWFkZXItY2VsbD5cbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC9tYXQtY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L21hdC1oZWFkZXItY2VsbD5cbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC9tYXQtY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9tYXQtaGVhZGVyLXJvdz5cbiAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC9tYXQtcm93PlxuPC9tYXQtdGFibGU+Il19