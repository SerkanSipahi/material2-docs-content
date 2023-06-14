import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
export class ChipsAvatarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: ChipsAvatarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: ChipsAvatarExample, isStandalone: true, selector: "chips-avatar-example", ngImport: i0, template: "<mat-chip-listbox aria-label=\"Dog selection\">\n  <mat-chip>\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog three\n  </mat-chip>\n</mat-chip-listbox>", styles: [""], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: ChipsAvatarExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-avatar-example', standalone: true, imports: [MatChipsModule], template: "<mat-chip-listbox aria-label=\"Dog selection\">\n  <mat-chip>\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog three\n  </mat-chip>\n</mat-chip-listbox>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXZhdGFyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRXZEOzs7R0FHRztBQVFILE1BQU0sT0FBTyxrQkFBa0I7OEdBQWxCLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdGQ2QvQix1bEJBYW1CLHlERERQLGNBQWM7OzJGQUViLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDRSxzQkFBc0IsY0FHcEIsSUFBSSxXQUNQLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyBhdmF0YXJcbiAqIEBkZXNjcmlwdGlvbiBBbiBhdmF0YXIgaW5zaWRlIGEgY2hpcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1hdmF0YXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtYXZhdGFyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1hdmF0YXItZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdENoaXBzTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNBdmF0YXJFeGFtcGxlIHt9XG4iLCI8bWF0LWNoaXAtbGlzdGJveCBhcmlhLWxhYmVsPVwiRG9nIHNlbGVjdGlvblwiPlxuICA8bWF0LWNoaXA+XG4gICAgPGltZyBtYXRDaGlwQXZhdGFyIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIiBhbHQ9XCJQaG90byBvZiBhIFNoaWJhIEludVwiLz5cbiAgICBEb2cgb25lXG4gIDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCBjb2xvcj1cInByaW1hcnlcIj5cbiAgICA8aW1nIG1hdENoaXBBdmF0YXIgc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiIGFsdD1cIlBob3RvIG9mIGEgU2hpYmEgSW51XCIvPlxuICAgIERvZyB0d29cbiAgPC9tYXQtY2hpcD5cbiAgPG1hdC1jaGlwIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgPGltZyBtYXRDaGlwQXZhdGFyIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIiBhbHQ9XCJQaG90byBvZiBhIFNoaWJhIEludVwiLz5cbiAgICBEb2cgdGhyZWVcbiAgPC9tYXQtY2hpcD5cbjwvbWF0LWNoaXAtbGlzdGJveD4iXX0=