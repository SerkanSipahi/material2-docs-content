import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/input";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/forms";
/**
 * @title Basic Inputs
 */
export class InputOverviewExample {
}
InputOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: InputOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: InputOverviewExample, selector: "input-overview-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Favorite food</mat-label>\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Leave a comment</mat-label>\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: InputOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-overview-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Favorite food</mat-label>\n    <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Leave a comment</mat-label>\n    <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2lucHV0L2lucHV0LW92ZXJ2aWV3L2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1vdmVydmlldy9pbnB1dC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9COzt3SEFBcEIsb0JBQW9COzRHQUFwQixvQkFBb0IsOERDVmpDLDBaQVdBO2tHRERhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIElucHV0c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1vdmVydmlldy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRPdmVydmlld0V4YW1wbGUge31cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiBQaXp6YVwiIHZhbHVlPVwiU3VzaGlcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8bWF0LWxhYmVsPkxlYXZlIGEgY29tbWVudDwvbWF0LWxhYmVsPlxuICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiBJdCBtYWtlcyBtZSBmZWVsLi4uXCI+PC90ZXh0YXJlYT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==