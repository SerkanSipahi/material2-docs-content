import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Basic sidenav */
export class SidenavOverviewExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: SidenavOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: SidenavOverviewExample, isStandalone: true, selector: "sidenav-overview-example", ngImport: i0, template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i1.MatSidenavContent, selector: "mat-sidenav-content" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: SidenavOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-overview-example', standalone: true, imports: [NgIf, MatSidenavModule], template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LW92ZXJ2aWV3L3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vdmVydmlldy9zaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXJDLDJCQUEyQjtBQVEzQixNQUFNLE9BQU8sc0JBQXNCO0lBUG5DO1FBUUUsY0FBUyxHQUFHLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25GOzhHQUZZLHNCQUFzQjtrR0FBdEIsc0JBQXNCLG9GQ1puQyw4U0FNQSxpTERJWSxJQUFJLDRGQUFFLGdCQUFnQjs7MkZBRXJCLHNCQUFzQjtrQkFQbEMsU0FBUzsrQkFDRSwwQkFBMEIsY0FHeEIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTaWRlbmF2TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqIEB0aXRsZSBCYXNpYyBzaWRlbmF2ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE1hdFNpZGVuYXZNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2T3ZlcnZpZXdFeGFtcGxlIHtcbiAgc2hvdWxkUnVuID0gLyhefC4pKHN0YWNrYmxpdHp8d2ViY29udGFpbmVyKS4oaW98Y29tKSQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpO1xufVxuIiwiPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgKm5nSWY9XCJzaG91bGRSdW5cIj5cbiAgPG1hdC1zaWRlbmF2IG1vZGU9XCJzaWRlXCIgb3BlbmVkPlNpZGVuYXYgY29udGVudDwvbWF0LXNpZGVuYXY+XG4gIDxtYXQtc2lkZW5hdi1jb250ZW50Pk1haW4gY29udGVudDwvbWF0LXNpZGVuYXYtY29udGVudD5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19