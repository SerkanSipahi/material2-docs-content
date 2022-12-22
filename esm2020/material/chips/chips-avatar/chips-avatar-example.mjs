import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
export class ChipsAvatarExample {
}
ChipsAvatarExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: ChipsAvatarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsAvatarExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: ChipsAvatarExample, selector: "chips-avatar-example", ngImport: i0, template: "<mat-chip-listbox aria-label=\"Dog selection\">\n  <mat-chip>\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog three\n  </mat-chip>\n</mat-chip-listbox>", styles: [""], dependencies: [{ kind: "component", type: i1.MatChip, selector: "mat-basic-chip, mat-chip", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "value"], outputs: ["change"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: ChipsAvatarExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-avatar-example', template: "<mat-chip-listbox aria-label=\"Dog selection\">\n  <mat-chip>\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog three\n  </mat-chip>\n</mat-chip-listbox>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXZhdGFyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7OztHQUdHO0FBTUgsTUFBTSxPQUFPLGtCQUFrQjs7c0hBQWxCLGtCQUFrQjswR0FBbEIsa0JBQWtCLDREQ1gvQix1bEJBYW1CO2tHREZOLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIGF2YXRhclxuICogQGRlc2NyaXB0aW9uIEFuIGF2YXRhciBpbnNpZGUgYSBjaGlwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWF2YXRhci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1hdmF0YXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWF2YXRhci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0F2YXRhckV4YW1wbGUge31cbiIsIjxtYXQtY2hpcC1saXN0Ym94IGFyaWEtbGFiZWw9XCJEb2cgc2VsZWN0aW9uXCI+XG4gIDxtYXQtY2hpcD5cbiAgICA8aW1nIG1hdENoaXBBdmF0YXIgc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiIGFsdD1cIlBob3RvIG9mIGEgU2hpYmEgSW51XCIvPlxuICAgIERvZyBvbmVcbiAgPC9tYXQtY2hpcD5cbiAgPG1hdC1jaGlwIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxpbWcgbWF0Q2hpcEF2YXRhciBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIgYWx0PVwiUGhvdG8gb2YgYSBTaGliYSBJbnVcIi8+XG4gICAgRG9nIHR3b1xuICA8L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgY29sb3I9XCJhY2NlbnRcIj5cbiAgICA8aW1nIG1hdENoaXBBdmF0YXIgc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiIGFsdD1cIlBob3RvIG9mIGEgU2hpYmEgSW51XCIvPlxuICAgIERvZyB0aHJlZVxuICA8L21hdC1jaGlwPlxuPC9tYXQtY2hpcC1saXN0Ym94PiJdfQ==