import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Basic menu
 */
class MenuOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MenuOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: MenuOverviewExample, selector: "menu-overview-example", ngImport: i0, template: "<!-- #docregion mat-menu-trigger-for -->\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<!-- #enddocregion mat-menu-trigger-for -->\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n", dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] }); }
}
export { MenuOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MenuOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-overview-example', template: "<!-- #docregion mat-menu-trigger-for -->\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<!-- #enddocregion mat-menu-trigger-for -->\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFJYSxtQkFBbUI7OEdBQW5CLG1CQUFtQjtrR0FBbkIsbUJBQW1CLDZEQ1RoQyxxUkFPQTs7U0RFYSxtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFKL0IsU0FBUzsrQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIG1lbnVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZW51LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVPdmVydmlld0V4YW1wbGUge31cbiIsIjwhLS0gI2RvY3JlZ2lvbiBtYXQtbWVudS10cmlnZ2VyLWZvciAtLT5cbjxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPk1lbnU8L2J1dHRvbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtbWVudS10cmlnZ2VyLWZvciAtLT5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAyPC9idXR0b24+XG48L21hdC1tZW51PlxuIl19