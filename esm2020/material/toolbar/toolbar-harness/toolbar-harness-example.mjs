import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
/**
 * @title Testing with MatToolbarHarness
 */
export class ToolbarHarnessExample {
}
ToolbarHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ToolbarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToolbarHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: ToolbarHarnessExample, selector: "toolbar-harness-example", ngImport: i0, template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button mat-button>\n      Button 1\n    </button>\n    <button mat-button>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n", components: [{ type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ToolbarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-harness-example', template: "<mat-toolbar><span>My App</span></mat-toolbar>\n<mat-toolbar>\n  <mat-toolbar-row><span>Row 1</span></mat-toolbar-row>\n  <mat-toolbar-row><span>Row 2</span>\n    <button mat-button>\n      Button 1\n    </button>\n    <button mat-button>\n      Button 2\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL3Rvb2xiYXItaGFybmVzcy90b29sYmFyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1oYXJuZXNzL3Rvb2xiYXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7c0dBQXJCLHFCQUFxQiwrRENUbEMsdVRBWUE7MkZESGEscUJBQXFCO2tCQUpqQyxTQUFTOytCQUNFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFRvb2xiYXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2xiYXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LXRvb2xiYXI+PHNwYW4+TXkgQXBwPC9zcGFuPjwvbWF0LXRvb2xiYXI+XG48bWF0LXRvb2xiYXI+XG4gIDxtYXQtdG9vbGJhci1yb3c+PHNwYW4+Um93IDE8L3NwYW4+PC9tYXQtdG9vbGJhci1yb3c+XG4gIDxtYXQtdG9vbGJhci1yb3c+PHNwYW4+Um93IDI8L3NwYW4+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlxuICAgICAgQnV0dG9uIDFcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+XG4gICAgICBCdXR0b24gMlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+XG4iXX0=