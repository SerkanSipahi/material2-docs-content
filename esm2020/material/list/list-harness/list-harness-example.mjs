import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-list";
import * as i2 from "@angular/material/core";
/**
 * @title Testing with MatListHarness
 */
export class ListHarnessExample {
}
ListHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: ListHarnessExample, selector: "list-harness-example", ngImport: i0, template: "<mat-list>\n  <mat-list-item>\n    <div matLine>Item </div>\n    <div matLine>1</div>\n    <div matListIcon>icon</div>\n    <div matListAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n", dependencies: [{ kind: "component", type: i1.MatLegacyList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { kind: "component", type: i1.MatLegacyListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatLegacyListAvatarCssMatStyler, selector: "[mat-list-avatar], [matListAvatar]" }, { kind: "directive", type: i2.MatLine, selector: "[mat-line], [matLine]" }, { kind: "directive", type: i1.MatLegacyListIconCssMatStyler, selector: "[mat-list-icon], [matListIcon]" }, { kind: "directive", type: i1.MatLegacyListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-harness-example', template: "<mat-list>\n  <mat-list-item>\n    <div matLine>Item </div>\n    <div matLine>1</div>\n    <div matListIcon>icon</div>\n    <div matListAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3QtaGFybmVzcy9saXN0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1oYXJuZXNzL2xpc3QtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7bUdBQWxCLGtCQUFrQiw0RENUL0IseVdBY0E7MkZETGEsa0JBQWtCO2tCQUo5QixTQUFTOytCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdExpc3RIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3QtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LWxpc3Q+XG4gIDxtYXQtbGlzdC1pdGVtPlxuICAgIDxkaXYgbWF0TGluZT5JdGVtIDwvZGl2PlxuICAgIDxkaXYgbWF0TGluZT4xPC9kaXY+XG4gICAgPGRpdiBtYXRMaXN0SWNvbj5pY29uPC9kaXY+XG4gICAgPGRpdiBtYXRMaXN0QXZhdGFyPkF2YXRhcjwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG4gIDxkaXYgbWF0U3ViaGVhZGVyPlNlY3Rpb24gMTwvZGl2PlxuICA8YSBtYXQtbGlzdC1pdGVtPlxuICAgIDxzcGFuPkl0ZW0gMjwvc3Bhbj5cbiAgPC9hPlxuICA8YnV0dG9uIG1hdC1saXN0LWl0ZW0+SXRlbSAzPC9idXR0b24+XG4gIDxkaXYgbWF0U3ViaGVhZGVyPlNlY3Rpb24gMjwvZGl2PlxuPC9tYXQtbGlzdD5cbiJdfQ==