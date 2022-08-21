import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/menu";
/** @title Menu with Standalone Trigger. */
export class CdkMenuStandaloneMenuExample {
}
CdkMenuStandaloneMenuExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkMenuStandaloneMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuStandaloneMenuExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: CdkMenuStandaloneMenuExample, selector: "cdk-menu-standalone-menu-example", ngImport: i0, template: "<!-- #docregion trigger -->\n<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-trigger\">Click me!</button>\n<!-- #enddocregion trigger -->\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Refresh</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Settings</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Help</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Sign out</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item,\n.example-standalone-trigger {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkMenuStandaloneMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-menu-example', template: "<!-- #docregion trigger -->\n<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-trigger\">Click me!</button>\n<!-- #enddocregion trigger -->\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Refresh</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Settings</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Help</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Sign out</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item,\n.example-standalone-trigger {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEMsMkNBQTJDO0FBTTNDLE1BQU0sT0FBTyw0QkFBNEI7OzhIQUE1Qiw0QkFBNEI7a0hBQTVCLDRCQUE0Qix3RUNSekMsNmdCQVlBO2dHREphLDRCQUE0QjtrQkFMeEMsU0FBUzsrQkFDRSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTWVudSB3aXRoIFN0YW5kYWxvbmUgVHJpZ2dlci4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlIHt9XG4iLCI8IS0tICNkb2NyZWdpb24gdHJpZ2dlciAtLT5cbjxidXR0b24gW2Nka01lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBjbGFzcz1cImV4YW1wbGUtc3RhbmRhbG9uZS10cmlnZ2VyXCI+Q2xpY2sgbWUhPC9idXR0b24+XG48IS0tICNlbmRkb2NyZWdpb24gdHJpZ2dlciAtLT5cblxuPG5nLXRlbXBsYXRlICNtZW51PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5SZWZyZXNoPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2V0dGluZ3M8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5IZWxwPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19