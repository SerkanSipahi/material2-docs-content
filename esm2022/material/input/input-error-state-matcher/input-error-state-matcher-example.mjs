import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Input with a custom ErrorStateMatcher */
export class InputErrorStateMatcherExample {
    constructor() {
        this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: InputErrorStateMatcherExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0", type: InputErrorStateMatcherExample, isStandalone: true, selector: "input-error-state-matcher-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Email</mat-label>\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"\n           placeholder=\"Ex. pat@example.com\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0", ngImport: i0, type: InputErrorStateMatcherExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-error-state-matcher-example', standalone: true, imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf], template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Email</mat-label>\n    <input type=\"email\" matInput [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"\n           placeholder=\"Ex. pat@example.com\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLFdBQVcsRUFHWCxVQUFVLEVBQ1YsV0FBVyxFQUNYLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRWhFLGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQVksQ0FBQyxPQUEyQixFQUFFLElBQXdDO1FBQ2hGLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0NBQ0Y7QUFFRCxtREFBbUQ7QUFRbkQsTUFBTSxPQUFPLDZCQUE2QjtJQVAxQztRQVFFLHFCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFaEYsWUFBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztLQUNyQzs4R0FKWSw2QkFBNkI7a0dBQTdCLDZCQUE2Qiw2RkM5QjFDLDhuQkFjQSxtTERjWSxXQUFXLCswQkFBRSxrQkFBa0IsK2RBQUUsY0FBYywwV0FBRSxtQkFBbUIsa05BQUUsSUFBSTs7MkZBRXpFLDZCQUE2QjtrQkFQekMsU0FBUzsrQkFDRSxtQ0FBbUMsY0FHakMsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwRGlyZWN0aXZlLFxuICBOZ0Zvcm0sXG4gIFZhbGlkYXRvcnMsXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqIEVycm9yIHdoZW4gaW52YWxpZCBjb250cm9sIGlzIGRpcnR5LCB0b3VjaGVkLCBvciBzdWJtaXR0ZWQuICovXG5leHBvcnQgY2xhc3MgTXlFcnJvclN0YXRlTWF0Y2hlciBpbXBsZW1lbnRzIEVycm9yU3RhdGVNYXRjaGVyIHtcbiAgaXNFcnJvclN0YXRlKGNvbnRyb2w6IEZvcm1Db250cm9sIHwgbnVsbCwgZm9ybTogRm9ybUdyb3VwRGlyZWN0aXZlIHwgTmdGb3JtIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzU3VibWl0dGVkID0gZm9ybSAmJiBmb3JtLnN1Ym1pdHRlZDtcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkIHx8IGlzU3VibWl0dGVkKSk7XG4gIH1cbn1cblxuLyoqIEB0aXRsZSBJbnB1dCB3aXRoIGEgY3VzdG9tIEVycm9yU3RhdGVNYXRjaGVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgTmdJZl0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlIHtcbiAgZW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKTtcblxuICBtYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTtcbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxtYXQtbGFiZWw+RW1haWw8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbWF0SW5wdXQgW2Zvcm1Db250cm9sXT1cImVtYWlsRm9ybUNvbnRyb2xcIiBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIHBhdEBleGFtcGxlLmNvbVwiPlxuICAgIDxtYXQtaGludD5FcnJvcnMgYXBwZWFyIGluc3RhbnRseSE8L21hdC1oaW50PlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJlbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdlbWFpbCcpICYmICFlbWFpbEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXG4gICAgPC9tYXQtZXJyb3I+XG4gICAgPG1hdC1lcnJvciAqbmdJZj1cImVtYWlsRm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgIEVtYWlsIGlzIDxzdHJvbmc+cmVxdWlyZWQ8L3N0cm9uZz5cbiAgICA8L21hdC1lcnJvcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==