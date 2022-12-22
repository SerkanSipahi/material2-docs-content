import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/listbox";
/** @title Listbox with disabled options. */
export class CdkListboxDisabledExample {
    constructor() {
        this.canDrinkCtrl = new FormControl(false);
    }
}
CdkListboxDisabledExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CdkListboxDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxDisabledExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: CdkListboxDisabledExample, selector: "cdk-listbox-disabled-example", exportAs: ["cdkListboxDisabledExample"], ngImport: i0, template: "<form>\n  <p>\n    <input type=\"checkbox\" id=\"can-drink\" [formControl]=\"canDrinkCtrl\">&nbsp;\n    <label for=\"can-drink\">I am 21 or older</label>\n  </p>\n  <section>\n    <div class=\"example-listbox-container\" [class.example-disabled]=\"!canDrinkCtrl.value\">\n      <!-- #docregion listbox -->\n      <label class=\"example-listbox-label\" id=\"example-wine-type-label\">\n        Wine Selection\n      </label>\n      <ul cdkListbox\n          [cdkListboxDisabled]=\"!canDrinkCtrl.value\"\n          aria-labelledby=\"example-wine-type-label\"\n          class=\"example-listbox\">\n        <li cdkOption=\"cabernet\"\n            class=\"example-option\">\n          Cabernet Sauvignon\n        </li>\n        <li cdkOption=\"syrah\"\n            class=\"example-option\">\n          Syrah\n        </li>\n        <li cdkOption=\"zinfandel\"\n            cdkOptionDisabled\n            class=\"example-option\">\n          Zinfandel <span class=\"example-sold-out\">(sold out)</span>\n        </li>\n        <li cdkOption=\"riesling\"\n            class=\"example-option\">\n          Riesling\n        </li>\n      </ul>\n      <!-- #enddocregion listbox -->\n    </div>\n  </section>\n</form>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-disabled {\n  border-color: rgba(0, 0, 0, 0.5);\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-disabled .example-listbox-label {\n  opacity: 0.5;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option[aria-disabled='true'] {\n  opacity: 0.5;\n}\n\n.example-option[aria-disabled='false']:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-sold-out {\n  color: red;\n  font-size: 0.75em;\n  vertical-align: super;\n}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i2.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CdkListboxDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-disabled-example', exportAs: 'cdkListboxDisabledExample', template: "<form>\n  <p>\n    <input type=\"checkbox\" id=\"can-drink\" [formControl]=\"canDrinkCtrl\">&nbsp;\n    <label for=\"can-drink\">I am 21 or older</label>\n  </p>\n  <section>\n    <div class=\"example-listbox-container\" [class.example-disabled]=\"!canDrinkCtrl.value\">\n      <!-- #docregion listbox -->\n      <label class=\"example-listbox-label\" id=\"example-wine-type-label\">\n        Wine Selection\n      </label>\n      <ul cdkListbox\n          [cdkListboxDisabled]=\"!canDrinkCtrl.value\"\n          aria-labelledby=\"example-wine-type-label\"\n          class=\"example-listbox\">\n        <li cdkOption=\"cabernet\"\n            class=\"example-option\">\n          Cabernet Sauvignon\n        </li>\n        <li cdkOption=\"syrah\"\n            class=\"example-option\">\n          Syrah\n        </li>\n        <li cdkOption=\"zinfandel\"\n            cdkOptionDisabled\n            class=\"example-option\">\n          Zinfandel <span class=\"example-sold-out\">(sold out)</span>\n        </li>\n        <li cdkOption=\"riesling\"\n            class=\"example-option\">\n          Riesling\n        </li>\n      </ul>\n      <!-- #enddocregion listbox -->\n    </div>\n  </section>\n</form>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-disabled {\n  border-color: rgba(0, 0, 0, 0.5);\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-disabled .example-listbox-label {\n  opacity: 0.5;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option[aria-disabled='true'] {\n  opacity: 0.5;\n}\n\n.example-option[aria-disabled='false']:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-sold-out {\n  color: red;\n  font-size: 0.75em;\n  vertical-align: super;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtZGlzYWJsZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LWRpc2FibGVkL2Nkay1saXN0Ym94LWRpc2FibGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1kaXNhYmxlZC9jZGstbGlzdGJveC1kaXNhYmxlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFM0MsNENBQTRDO0FBTzVDLE1BQU0sT0FBTyx5QkFBeUI7SUFOdEM7UUFPRSxpQkFBWSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDOzs2SEFGWSx5QkFBeUI7aUhBQXpCLHlCQUF5Qiw2R0NWdEMsNHJDQXFDQTtrR0QzQmEseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLDhCQUE4QixZQUM5QiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgTGlzdGJveCB3aXRoIGRpc2FibGVkIG9wdGlvbnMuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbGlzdGJveC1kaXNhYmxlZC1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtMaXN0Ym94RGlzYWJsZWRFeGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbGlzdGJveC1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWxpc3Rib3gtZGlzYWJsZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGlzdGJveERpc2FibGVkRXhhbXBsZSB7XG4gIGNhbkRyaW5rQ3RybCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG59XG4iLCI8Zm9ybT5cbiAgPHA+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2FuLWRyaW5rXCIgW2Zvcm1Db250cm9sXT1cImNhbkRyaW5rQ3RybFwiPiZuYnNwO1xuICAgIDxsYWJlbCBmb3I9XCJjYW4tZHJpbmtcIj5JIGFtIDIxIG9yIG9sZGVyPC9sYWJlbD5cbiAgPC9wPlxuICA8c2VjdGlvbj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWNvbnRhaW5lclwiIFtjbGFzcy5leGFtcGxlLWRpc2FibGVkXT1cIiFjYW5Ecmlua0N0cmwudmFsdWVcIj5cbiAgICAgIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWxhYmVsXCIgaWQ9XCJleGFtcGxlLXdpbmUtdHlwZS1sYWJlbFwiPlxuICAgICAgICBXaW5lIFNlbGVjdGlvblxuICAgICAgPC9sYWJlbD5cbiAgICAgIDx1bCBjZGtMaXN0Ym94XG4gICAgICAgICAgW2Nka0xpc3Rib3hEaXNhYmxlZF09XCIhY2FuRHJpbmtDdHJsLnZhbHVlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXdpbmUtdHlwZS1sYWJlbFwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3hcIj5cbiAgICAgICAgPGxpIGNka09wdGlvbj1cImNhYmVybmV0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgICAgICBDYWJlcm5ldCBTYXV2aWdub25cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNka09wdGlvbj1cInN5cmFoXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgICAgICBTeXJhaFxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2RrT3B0aW9uPVwiemluZmFuZGVsXCJcbiAgICAgICAgICAgIGNka09wdGlvbkRpc2FibGVkXG4gICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XG4gICAgICAgICAgWmluZmFuZGVsIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zb2xkLW91dFwiPihzb2xkIG91dCk8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjZGtPcHRpb249XCJyaWVzbGluZ1wiXG4gICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XG4gICAgICAgICAgUmllc2xpbmdcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8IS0tICNlbmRkb2NyZWdpb24gbGlzdGJveCAtLT5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC9mb3JtPlxuIl19