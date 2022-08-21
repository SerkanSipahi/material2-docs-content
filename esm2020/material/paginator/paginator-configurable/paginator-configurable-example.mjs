import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/paginator";
import * as i5 from "@angular/forms";
/**
 * @title Configurable paginator
 */
export class PaginatorConfigurableExample {
    constructor() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
}
PaginatorConfigurableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: PaginatorConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginatorConfigurableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: PaginatorConfigurableExample, selector: "paginator-configurable-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>List length</mat-label>\n  <input matInput [(ngModel)]=\"length\" type=\"number\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size</mat-label>\n  <input matInput [(ngModel)]=\"pageSize\" type=\"number\">\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size options</mat-label>\n  <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n         [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = $event\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n", styles: [".mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: PaginatorConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-configurable-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>List length</mat-label>\n  <input matInput [(ngModel)]=\"length\" type=\"number\">\n</mat-form-field>\n\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size</mat-label>\n  <input matInput [(ngModel)]=\"pageSize\" type=\"number\">\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Page size options</mat-label>\n  <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n         [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [pageSizeOptions]=\"pageSizeOptions\"\n               (page)=\"pageEvent = $event\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n", styles: [".mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUd4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFNRSxzQkFBc0I7UUFDdEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FVOUM7SUFMQyxrQkFBa0IsQ0FBQyx1QkFBK0I7UUFDaEQsSUFBSSx1QkFBdUIsRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQzs7OEhBYlUsNEJBQTRCO2tIQUE1Qiw0QkFBNEIsc0VDWHpDLDZoQ0E0QkE7Z0dEakJhLDRCQUE0QjtrQkFMeEMsU0FBUzsrQkFDRSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2VFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIHBhZ2luYXRvclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIC8vIE1hdFBhZ2luYXRvciBJbnB1dHNcbiAgbGVuZ3RoID0gMTAwO1xuICBwYWdlU2l6ZSA9IDEwO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzUsIDEwLCAyNSwgMTAwXTtcblxuICAvLyBNYXRQYWdpbmF0b3IgT3V0cHV0XG4gIHBhZ2VFdmVudDogUGFnZUV2ZW50O1xuXG4gIHNldFBhZ2VTaXplT3B0aW9ucyhzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dDogc3RyaW5nKSB7XG4gICAgaWYgKHNldFBhZ2VTaXplT3B0aW9uc0lucHV0KSB7XG4gICAgICB0aGlzLnBhZ2VTaXplT3B0aW9ucyA9IHNldFBhZ2VTaXplT3B0aW9uc0lucHV0LnNwbGl0KCcsJykubWFwKHN0ciA9PiArc3RyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkxpc3QgbGVuZ3RoPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImxlbmd0aFwiIHR5cGU9XCJudW1iZXJcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlBhZ2Ugc2l6ZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiIHR5cGU9XCJudW1iZXJcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5QYWdlIHNpemUgb3B0aW9uczwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwicGFnZVNpemVPcHRpb25zXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0UGFnZVNpemVPcHRpb25zKCRldmVudClcIlxuICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInt1cGRhdGVPbjogJ2JsdXInfVwiIHBsYWNlaG9sZGVyPVwiRXguIDEwLDI1LDUwXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LXBhZ2luYXRvciBbbGVuZ3RoXT1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgKHBhZ2UpPVwicGFnZUV2ZW50ID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuXG48ZGl2ICpuZ0lmPVwicGFnZUV2ZW50XCI+XG4gIDxoNT5QYWdlIENoYW5nZSBFdmVudCBQcm9wZXJ0aWVzPC9oNT5cbiAgPGRpdj5MaXN0IGxlbmd0aDoge3twYWdlRXZlbnQubGVuZ3RofX08L2Rpdj5cbiAgPGRpdj5QYWdlIHNpemU6IHt7cGFnZUV2ZW50LnBhZ2VTaXplfX08L2Rpdj5cbiAgPGRpdj5QYWdlIGluZGV4OiB7e3BhZ2VFdmVudC5wYWdlSW5kZXh9fTwvZGl2PlxuPC9kaXY+XG4iXX0=