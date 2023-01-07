import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/slide-toggle";
/**
 * @title Slide-toggle with forms
 */
export class SlideToggleFormsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isChecked = true;
        this.formGroup = this._formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue],
        });
    }
    alertFormValues(formGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }
}
SlideToggleFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: SlideToggleFormsExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
SlideToggleFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-rc.0", type: SlideToggleFormsExample, selector: "slide-toggle-forms-example", ngImport: i0, template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n", styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i3.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { kind: "component", type: i3.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: SlideToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-forms-example', template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n", styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFbEU7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBT2xDLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBTjdDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ2xDLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0lBRTZDLENBQUM7SUFFakQsZUFBZSxDQUFDLFNBQW9CO1FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7eUhBWFUsdUJBQXVCOzZHQUF2Qix1QkFBdUIsa0VDWHBDLCtnQ0F5QkE7Z0dEZGEsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBTbGlkZS10b2dnbGUgd2l0aCBmb3Jtc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlVG9nZ2xlRm9ybXNFeGFtcGxlIHtcbiAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgZm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIGVuYWJsZVdpZmk6ICcnLFxuICAgIGFjY2VwdFRlcm1zOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIGFsZXJ0Rm9ybVZhbHVlcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGZvcm1Hcm91cC52YWx1ZSwgbnVsbCwgMikpO1xuICB9XG59XG4iLCI8cD5TbGlkZSBUb2dnbGUgdXNpbmcgYSBzaW1wbGUgTmdNb2RlbC48L3A+XG5cbjxtYXQtc2xpZGUtdG9nZ2xlIFsobmdNb2RlbCldPVwiaXNDaGVja2VkXCI+U2xpZGUgVG9nZ2xlIENoZWNrZWQ6IHt7aXNDaGVja2VkfX08L21hdC1zbGlkZS10b2dnbGU+XG5cbjxwPlNsaWRlIFRvZ2dsZSBpbnNpZGUgb2YgYSBUZW1wbGF0ZS1kcml2ZW4gZm9ybTwvcD5cblxuPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIiAjZm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJhbGVydEZvcm1WYWx1ZXMoZm9ybS5mb3JtKVwiPlxuXG4gIDxtYXQtc2xpZGUtdG9nZ2xlIG5nTW9kZWwgbmFtZT1cImVuYWJsZVdpZmlcIj5FbmFibGUgV2lmaTwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgPG1hdC1zbGlkZS10b2dnbGUgbmdNb2RlbCBuYW1lPVwiYWNjZXB0VGVybXNcIiByZXF1aXJlZD5BY2NlcHQgVGVybXMgb2YgU2VydmljZTwvbWF0LXNsaWRlLXRvZ2dsZT5cblxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIFNldHRpbmdzPC9idXR0b24+XG48L2Zvcm0+XG5cbjxwPlNsaWRlIFRvZ2dsZSBpbnNpZGUgb2YgYSBSZWFjdGl2ZSBmb3JtPC9wPlxuXG48Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImFsZXJ0Rm9ybVZhbHVlcyhmb3JtR3JvdXApXCIgbmdOYXRpdmVWYWxpZGF0ZT5cblxuICA8bWF0LXNsaWRlLXRvZ2dsZSBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVXaWZpXCI+RW5hYmxlIFdpZmk8L21hdC1zbGlkZS10b2dnbGU+XG4gIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cImFjY2VwdFRlcm1zXCI+QWNjZXB0IFRlcm1zIG9mIFNlcnZpY2U8L21hdC1zbGlkZS10b2dnbGU+XG5cbiAgPHA+Rm9ybSBHcm91cCBTdGF0dXM6IHt7Zm9ybUdyb3VwLnN0YXR1c319PC9wPlxuXG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgU2V0dGluZ3M8L2J1dHRvbj5cbjwvZm9ybT5cbiJdfQ==