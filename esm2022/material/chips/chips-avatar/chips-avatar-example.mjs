import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
class ChipsAvatarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ChipsAvatarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: ChipsAvatarExample, selector: "chips-avatar-example", ngImport: i0, template: "<mat-chip-listbox aria-label=\"Dog selection\">\n  <mat-chip>\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog three\n  </mat-chip>\n</mat-chip-listbox>", styles: [""], dependencies: [{ kind: "component", type: i1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }] }); }
}
export { ChipsAvatarExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ChipsAvatarExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-avatar-example', template: "<mat-chip-listbox aria-label=\"Dog selection\">\n  <mat-chip>\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog one\n  </mat-chip>\n  <mat-chip color=\"primary\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog two\n  </mat-chip>\n  <mat-chip color=\"accent\">\n    <img matChipAvatar src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\" alt=\"Photo of a Shiba Inu\"/>\n    Dog three\n  </mat-chip>\n</mat-chip-listbox>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXZhdGFyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7OztHQUdHO0FBQ0gsTUFLYSxrQkFBa0I7OEdBQWxCLGtCQUFrQjtrR0FBbEIsa0JBQWtCLDREQ1gvQix1bEJBYW1COztTREZOLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgYXZhdGFyXG4gKiBAZGVzY3JpcHRpb24gQW4gYXZhdGFyIGluc2lkZSBhIGNoaXBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtYXZhdGFyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWF2YXRhci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtYXZhdGFyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzQXZhdGFyRXhhbXBsZSB7fVxuIiwiPG1hdC1jaGlwLWxpc3Rib3ggYXJpYS1sYWJlbD1cIkRvZyBzZWxlY3Rpb25cIj5cbiAgPG1hdC1jaGlwPlxuICAgIDxpbWcgbWF0Q2hpcEF2YXRhciBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIgYWx0PVwiUGhvdG8gb2YgYSBTaGliYSBJbnVcIi8+XG4gICAgRG9nIG9uZVxuICA8L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPGltZyBtYXRDaGlwQXZhdGFyIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIiBhbHQ9XCJQaG90byBvZiBhIFNoaWJhIEludVwiLz5cbiAgICBEb2cgdHdvXG4gIDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCBjb2xvcj1cImFjY2VudFwiPlxuICAgIDxpbWcgbWF0Q2hpcEF2YXRhciBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIgYWx0PVwiUGhvdG8gb2YgYSBTaGliYSBJbnVcIi8+XG4gICAgRG9nIHRocmVlXG4gIDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLWxpc3Rib3g+Il19