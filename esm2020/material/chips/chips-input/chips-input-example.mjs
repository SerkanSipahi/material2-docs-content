import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/form-field";
/**
 * @title Chips with input
 */
export class ChipsInputExample {
    constructor() {
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push({ name: value });
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    edit(fruit, event) {
        const value = event.value.trim();
        // Remove fruit if it no longer has a name
        if (!value) {
            this.remove(fruit);
            return;
        }
        // Edit existing fruit
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits[index].name = value;
        }
    }
}
ChipsInputExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: ChipsInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsInputExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-rc.0", type: ChipsInputExample, selector: "chips-input-example", ngImport: i0, template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    <mat-chip-row *ngFor=\"let fruit of fruits\"\n                  (removed)=\"remove(fruit)\"\n                  [editable]=\"true\"\n                  (edited)=\"edit(fruit, $event)\"\n                  [aria-description]=\"'press enter to edit ' + fruit.name\">\n      {{fruit.name}}\n      <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipGrid\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\"/>\n  </mat-chip-grid>\n</mat-form-field>", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, mat-basic-chip-row", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: ChipsInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-input-example', template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    <mat-chip-row *ngFor=\"let fruit of fruits\"\n                  (removed)=\"remove(fruit)\"\n                  [editable]=\"true\"\n                  (edited)=\"edit(fruit, $event)\"\n                  [aria-description]=\"'press enter to edit ' + fruit.name\">\n      {{fruit.name}}\n      <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipGrid\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\"/>\n  </mat-chip-grid>\n</mat-form-field>", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaW5wdXQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBTUUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNSLHVCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBVSxDQUFDO1FBQ3RELFdBQU0sR0FBWSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7S0FxQ3RFO0lBbkNDLEdBQUcsQ0FBQyxLQUF3QjtRQUMxQixNQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekMsZ0JBQWdCO1FBQ2hCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELHdCQUF3QjtRQUN4QixLQUFLLENBQUMsU0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQVksRUFBRSxLQUF5QjtRQUMxQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPO1NBQ1I7UUFFRCxzQkFBc0I7UUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7bUhBdkNVLGlCQUFpQjt1R0FBakIsaUJBQWlCLDJEQ2hCOUIsaTRCQW1CaUI7Z0dESEosaUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDaGlwRWRpdGVkRXZlbnQsIE1hdENoaXBJbnB1dEV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnJ1aXQge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIHdpdGggaW5wdXRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtaW5wdXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtaW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWlucHV0LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzSW5wdXRFeGFtcGxlIHtcbiAgYWRkT25CbHVyID0gdHJ1ZTtcbiAgcmVhZG9ubHkgc2VwYXJhdG9yS2V5c0NvZGVzID0gW0VOVEVSLCBDT01NQV0gYXMgY29uc3Q7XG4gIGZydWl0czogRnJ1aXRbXSA9IFt7bmFtZTogJ0xlbW9uJ30sIHtuYW1lOiAnTGltZSd9LCB7bmFtZTogJ0FwcGxlJ31dO1xuXG4gIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC52YWx1ZSB8fCAnJykudHJpbSgpO1xuXG4gICAgLy8gQWRkIG91ciBmcnVpdFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mcnVpdHMucHVzaCh7bmFtZTogdmFsdWV9KTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWVcbiAgICBldmVudC5jaGlwSW5wdXQhLmNsZWFyKCk7XG4gIH1cblxuICByZW1vdmUoZnJ1aXQ6IEZydWl0KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZydWl0cy5pbmRleE9mKGZydWl0KTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmZydWl0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGVkaXQoZnJ1aXQ6IEZydWl0LCBldmVudDogTWF0Q2hpcEVkaXRlZEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZS50cmltKCk7XG5cbiAgICAvLyBSZW1vdmUgZnJ1aXQgaWYgaXQgbm8gbG9uZ2VyIGhhcyBhIG5hbWVcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLnJlbW92ZShmcnVpdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRWRpdCBleGlzdGluZyBmcnVpdFxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mcnVpdHMuaW5kZXhPZihmcnVpdCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZnJ1aXRzW2luZGV4XS5uYW1lID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWNoaXAtbGlzdFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgRnJ1aXRzPC9tYXQtbGFiZWw+XG4gIDxtYXQtY2hpcC1ncmlkICNjaGlwR3JpZCBhcmlhLWxhYmVsPVwiRW50ZXIgZnJ1aXRzXCI+XG4gICAgPG1hdC1jaGlwLXJvdyAqbmdGb3I9XCJsZXQgZnJ1aXQgb2YgZnJ1aXRzXCJcbiAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cInJlbW92ZShmcnVpdClcIlxuICAgICAgICAgICAgICAgICAgW2VkaXRhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgKGVkaXRlZCk9XCJlZGl0KGZydWl0LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIFthcmlhLWRlc2NyaXB0aW9uXT1cIidwcmVzcyBlbnRlciB0byBlZGl0ICcgKyBmcnVpdC5uYW1lXCI+XG4gICAgICB7e2ZydWl0Lm5hbWV9fVxuICAgICAgPGJ1dHRvbiBtYXRDaGlwUmVtb3ZlIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3JlbW92ZSAnICsgZnJ1aXQubmFtZVwiPlxuICAgICAgICA8bWF0LWljb24+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LWNoaXAtcm93PlxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIk5ldyBmcnVpdC4uLlwiXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcEdyaWRcIlxuICAgICAgICAgICBbbWF0Q2hpcElucHV0U2VwYXJhdG9yS2V5Q29kZXNdPVwic2VwYXJhdG9yS2V5c0NvZGVzXCJcbiAgICAgICAgICAgW21hdENoaXBJbnB1dEFkZE9uQmx1cl09XCJhZGRPbkJsdXJcIlxuICAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkKCRldmVudClcIi8+XG4gIDwvbWF0LWNoaXAtZ3JpZD5cbjwvbWF0LWZvcm0tZmllbGQ+Il19