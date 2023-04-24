import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/forms";
/**
 * @title MatRipple basic usage
 */
class RippleOverviewExample {
    constructor() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: RippleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: RippleOverviewExample, selector: "ripple-overview-example", ngImport: i0, template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\" appearance=\"fill\">\n  <mat-label>Radius</mat-label>\n  <input matInput [(ngModel)]=\"radius\" type=\"number\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\" appearance=\"fill\">\n  <mat-label>Color</mat-label>\n  <input matInput [(ngModel)]=\"color\" type=\"text\">\n</mat-form-field>\n\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n     matRipple\n     [matRippleCentered]=\"centered\"\n     [matRippleDisabled]=\"disabled\"\n     [matRippleUnbounded]=\"unbounded\"\n     [matRippleRadius]=\"radius\"\n     [matRippleColor]=\"color\">\n  Click me\n</div>\n", styles: [".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n"], dependencies: [{ kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
export { RippleOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: RippleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'ripple-overview-example', template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\" appearance=\"fill\">\n  <mat-label>Radius</mat-label>\n  <input matInput [(ngModel)]=\"radius\" type=\"number\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\" appearance=\"fill\">\n  <mat-label>Color</mat-label>\n  <input matInput [(ngModel)]=\"color\" type=\"text\">\n</mat-form-field>\n\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n     matRipple\n     [matRippleCentered]=\"centered\"\n     [matRippleDisabled]=\"disabled\"\n     [matRippleUnbounded]=\"unbounded\"\n     [matRippleRadius]=\"radius\"\n     [matRippleColor]=\"color\">\n  Click me\n</div>\n", styles: [".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL3JpcHBsZS1vdmVydmlldy9yaXBwbGUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvcmlwcGxlLW92ZXJ2aWV3L3JpcHBsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUV4Qzs7R0FFRztBQUNILE1BS2EscUJBQXFCO0lBTGxDO1FBTUUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7S0FJbkI7bUhBUFkscUJBQXFCO3VHQUFyQixxQkFBcUIsK0RDVmxDLHc3QkF1QkE7O1NEYmEscUJBQXFCO2dHQUFyQixxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNYXRSaXBwbGUgYmFzaWMgdXNhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3JpcHBsZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJpcHBsZU92ZXJ2aWV3RXhhbXBsZSB7XG4gIGNlbnRlcmVkID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIHVuYm91bmRlZCA9IGZhbHNlO1xuXG4gIHJhZGl1czogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xufVxuIiwiPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNlbnRlcmVkXCIgY2xhc3M9XCJleGFtcGxlLXJpcHBsZS1jaGVja2JveFwiPkNlbnRlcmVkPC9tYXQtY2hlY2tib3g+XG48bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZGlzYWJsZWRcIiBjbGFzcz1cImV4YW1wbGUtcmlwcGxlLWNoZWNrYm94XCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbjxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJ1bmJvdW5kZWRcIiBjbGFzcz1cImV4YW1wbGUtcmlwcGxlLWNoZWNrYm94XCI+VW5ib3VuZGVkPC9tYXQtY2hlY2tib3g+XG5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtcmlwcGxlLWZvcm0tZmllbGRcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlJhZGl1czwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJyYWRpdXNcIiB0eXBlPVwibnVtYmVyXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtZm9ybS1maWVsZFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+Q29sb3I8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwiY29sb3JcIiB0eXBlPVwidGV4dFwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1yaXBwbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejRcIlxuICAgICBtYXRSaXBwbGVcbiAgICAgW21hdFJpcHBsZUNlbnRlcmVkXT1cImNlbnRlcmVkXCJcbiAgICAgW21hdFJpcHBsZURpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgW21hdFJpcHBsZVVuYm91bmRlZF09XCJ1bmJvdW5kZWRcIlxuICAgICBbbWF0UmlwcGxlUmFkaXVzXT1cInJhZGl1c1wiXG4gICAgIFttYXRSaXBwbGVDb2xvcl09XCJjb2xvclwiPlxuICBDbGljayBtZVxuPC9kaXY+XG4iXX0=