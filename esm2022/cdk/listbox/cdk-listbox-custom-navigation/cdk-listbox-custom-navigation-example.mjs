import { Component } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Listbox with custom keyboard navigation options. */
export class CdkListboxCustomNavigationExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: CdkListboxCustomNavigationExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: CdkListboxCustomNavigationExample, isStandalone: true, selector: "cdk-listbox-custom-navigation-example", exportAs: ["cdkListboxCustomNavigationExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-flavor-label\">\n    Flavor\n  </label>\n  <ul cdkListbox\n      cdkListboxNavigatesDisabledOptions\n      cdkListboxNavigationWrapDisabled\n      aria-labelledby=\"example-flavor-label\"\n      class=\"example-listbox\">\n    <li cdkOption=\"chocolate\"\n        class=\"example-option\">\n      Chocolate\n    </li>\n    <li cdkOption=\"pumpkin-spice\"\n        cdkOptionDisabled\n        class=\"example-option\">\n      Pumpkin Spice (seasonal)\n    </li>\n    <li cdkOption=\"strawberry\"\n        class=\"example-option\">\n      Strawberry\n    </li>\n    <li cdkOption=\"vanilla\"\n        class=\"example-option\">\n      Vanilla\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option[aria-disabled='true'] {\n  opacity: 0.5;\n}\n\n.example-option[aria-disabled='false']:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: CdkListboxCustomNavigationExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-custom-navigation-example', exportAs: 'cdkListboxCustomNavigationExample', standalone: true, imports: [CdkListbox, CdkOption], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-flavor-label\">\n    Flavor\n  </label>\n  <ul cdkListbox\n      cdkListboxNavigatesDisabledOptions\n      cdkListboxNavigationWrapDisabled\n      aria-labelledby=\"example-flavor-label\"\n      class=\"example-listbox\">\n    <li cdkOption=\"chocolate\"\n        class=\"example-option\">\n      Chocolate\n    </li>\n    <li cdkOption=\"pumpkin-spice\"\n        cdkOptionDisabled\n        class=\"example-option\">\n      Pumpkin Spice (seasonal)\n    </li>\n    <li cdkOption=\"strawberry\"\n        class=\"example-option\">\n      Strawberry\n    </li>\n    <li cdkOption=\"vanilla\"\n        class=\"example-option\">\n      Vanilla\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option[aria-disabled='true'] {\n  opacity: 0.5;\n}\n\n.example-option[aria-disabled='false']:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtY3VzdG9tLW5hdmlnYXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LWN1c3RvbS1uYXZpZ2F0aW9uL2Nkay1saXN0Ym94LWN1c3RvbS1uYXZpZ2F0aW9uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1jdXN0b20tbmF2aWdhdGlvbi9jZGstbGlzdGJveC1jdXN0b20tbmF2aWdhdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUUzRCw4REFBOEQ7QUFTOUQsTUFBTSxPQUFPLGlDQUFpQzs4R0FBakMsaUNBQWlDO2tHQUFqQyxpQ0FBaUMsa0pDWjlDLGcwQkE4QkEsaTdCRHBCWSxVQUFVLCtXQUFFLFNBQVM7OzJGQUVwQixpQ0FBaUM7a0JBUjdDLFNBQVM7K0JBQ0UsdUNBQXVDLFlBQ3ZDLG1DQUFtQyxjQUdqQyxJQUFJLFdBQ1AsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtMaXN0Ym94LCBDZGtPcHRpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9saXN0Ym94JztcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggY3VzdG9tIGtleWJvYXJkIG5hdmlnYXRpb24gb3B0aW9ucy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LWN1c3RvbS1uYXZpZ2F0aW9uLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hDdXN0b21OYXZpZ2F0aW9uRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtY3VzdG9tLW5hdmlnYXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LWN1c3RvbS1uYXZpZ2F0aW9uLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtMaXN0Ym94LCBDZGtPcHRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94Q3VzdG9tTmF2aWdhdGlvbkV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtZmxhdm9yLWxhYmVsXCI+XG4gICAgRmxhdm9yXG4gIDwvbGFiZWw+XG4gIDx1bCBjZGtMaXN0Ym94XG4gICAgICBjZGtMaXN0Ym94TmF2aWdhdGVzRGlzYWJsZWRPcHRpb25zXG4gICAgICBjZGtMaXN0Ym94TmF2aWdhdGlvbldyYXBEaXNhYmxlZFxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1mbGF2b3ItbGFiZWxcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3hcIj5cbiAgICA8bGkgY2RrT3B0aW9uPVwiY2hvY29sYXRlXCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAgQ2hvY29sYXRlXG4gICAgPC9saT5cbiAgICA8bGkgY2RrT3B0aW9uPVwicHVtcGtpbi1zcGljZVwiXG4gICAgICAgIGNka09wdGlvbkRpc2FibGVkXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIFB1bXBraW4gU3BpY2UgKHNlYXNvbmFsKVxuICAgIDwvbGk+XG4gICAgPGxpIGNka09wdGlvbj1cInN0cmF3YmVycnlcIlxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XG4gICAgICBTdHJhd2JlcnJ5XG4gICAgPC9saT5cbiAgICA8bGkgY2RrT3B0aW9uPVwidmFuaWxsYVwiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIFZhbmlsbGFcbiAgICA8L2xpPlxuICA8L3VsPlxuICA8IS0tICNlbmRkb2NyZWdpb24gbGlzdGJveCAtLT5cbjwvZGl2PlxuIl19