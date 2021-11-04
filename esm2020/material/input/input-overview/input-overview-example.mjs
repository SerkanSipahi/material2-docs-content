import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/input";
/**
 * @title Basic Inputs
 */
export class InputOverviewExample {
}
InputOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: InputOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: InputOverviewExample, selector: "input-overview-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Favorite food</mat-label>\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Leave a comment</mat-label>\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }], directives: [{ type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: InputOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-overview-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Favorite food</mat-label>\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Leave a comment</mat-label>\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2lucHV0L2lucHV0LW92ZXJ2aWV3L2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1vdmVydmlldy9pbnB1dC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO3FHQUFwQixvQkFBb0IsOERDVmpDLGtjQVdBOzJGRERhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIElucHV0c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1vdmVydmlldy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRPdmVydmlld0V4YW1wbGUge31cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBmb29kPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIFBpenphXCIgdmFsdWU9XCJTdXNoaVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5MZWF2ZSBhIGNvbW1lbnQ8L21hdC1sYWJlbD5cbiAgICA8dGV4dGFyZWEgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gSXQgbWFrZXMgbWUgZmVlbC4uLlwiPjwvdGV4dGFyZWE+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=