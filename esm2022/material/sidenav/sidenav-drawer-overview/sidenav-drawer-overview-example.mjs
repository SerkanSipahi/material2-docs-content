import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Basic drawer */
export class SidenavDrawerOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: SidenavDrawerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: SidenavDrawerOverviewExample, isStandalone: true, selector: "sidenav-drawer-overview-example", ngImport: i0, template: "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { kind: "component", type: i1.MatDrawerContent, selector: "mat-drawer-content" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: SidenavDrawerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-drawer-overview-example', standalone: true, imports: [MatSidenavModule], template: "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXcvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXcvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7OztBQUUzRCwwQkFBMEI7QUFRMUIsTUFBTSxPQUFPLDRCQUE0Qjs4R0FBNUIsNEJBQTRCO2tHQUE1Qiw0QkFBNEIsMkZDWHpDLHdNQUlBLGlLREtZLGdCQUFnQjs7MkZBRWYsNEJBQTRCO2tCQVB4QyxTQUFTOytCQUNFLGlDQUFpQyxjQUcvQixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbi8qKiBAdGl0bGUgQmFzaWMgZHJhd2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWRyYXdlci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWRyYXdlci1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFNpZGVuYXZNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2RHJhd2VyT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LWRyYXdlci1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8bWF0LWRyYXdlciBtb2RlPVwic2lkZVwiIG9wZW5lZD5EcmF3ZXIgY29udGVudDwvbWF0LWRyYXdlcj5cbiAgPG1hdC1kcmF3ZXItY29udGVudD5NYWluIGNvbnRlbnQ8L21hdC1kcmF3ZXItY29udGVudD5cbjwvbWF0LWRyYXdlci1jb250YWluZXI+XG4iXX0=