import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/menu";
/** @title Nested context menus. */
class CdkMenuNestedContextExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkMenuNestedContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkMenuNestedContextExample, selector: "cdk-menu-nested-context-example", exportAs: ["cdkMenuNestedContextExample"], ngImport: i0, template: "<!-- #docregion triggers -->\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\n  Outer context menu\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\n</div>\n<!-- #enddocregion triggers -->\n\n<ng-template #outer>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\n  </div>\n</ng-template>\n\n<ng-template #inner>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n", styles: [".example-context-area {\n  display: inline-grid;\n  border: 2px dashed black;\n}\n\n.example-context-area .example-context-area {\n  margin: 100px;\n  width: 200px;\n  height: 100px;\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuPosition", "cdkContextMenuTriggerData", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }] }); }
}
export { CdkMenuNestedContextExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkMenuNestedContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-nested-context-example', exportAs: 'cdkMenuNestedContextExample', template: "<!-- #docregion triggers -->\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\n  Outer context menu\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\n</div>\n<!-- #enddocregion triggers -->\n\n<ng-template #outer>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\n  </div>\n</ng-template>\n\n<ng-template #inner>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n", styles: [".example-context-area {\n  display: inline-grid;\n  border: 2px dashed black;\n}\n\n.example-context-area .example-context-area {\n  margin: 100px;\n  width: 200px;\n  height: 100px;\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtbmVzdGVkLWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9tZW51L2Nkay1tZW51LW5lc3RlZC1jb250ZXh0L2Nkay1tZW51LW5lc3RlZC1jb250ZXh0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1uZXN0ZWQtY29udGV4dC9jZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDLG1DQUFtQztBQUNuQyxNQU1hLDJCQUEyQjs4R0FBM0IsMkJBQTJCO2tHQUEzQiwyQkFBMkIsa0hDVHhDLGt4QkFxQkE7O1NEWmEsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0UsaUNBQWlDLFlBQ2pDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBOZXN0ZWQgY29udGV4dCBtZW51cy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LW5lc3RlZC1jb250ZXh0LWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka01lbnVOZXN0ZWRDb250ZXh0RXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1tZW51LW5lc3RlZC1jb250ZXh0LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVOZXN0ZWRDb250ZXh0RXhhbXBsZSB7fVxuIiwiPCEtLSAjZG9jcmVnaW9uIHRyaWdnZXJzIC0tPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGV4dC1hcmVhXCIgW2Nka0NvbnRleHRNZW51VHJpZ2dlckZvcl09XCJvdXRlclwiPlxuICBPdXRlciBjb250ZXh0IG1lbnVcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGV4dC1hcmVhXCIgW2Nka0NvbnRleHRNZW51VHJpZ2dlckZvcl09XCJpbm5lclwiPklubmVyIGNvbnRleHQgbWVudTwvZGl2PlxuPC9kaXY+XG48IS0tICNlbmRkb2NyZWdpb24gdHJpZ2dlcnMgLS0+XG5cbjxuZy10ZW1wbGF0ZSAjb3V0ZXI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNhdmU8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5FeGl0PC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNpbm5lcj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnU+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q3V0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q29weTwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlBhc3RlPC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==