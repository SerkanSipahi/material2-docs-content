import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/stepper";
/**
 * @title Stepper lazy content rendering
 */
class StepperLazyContentExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: StepperLazyContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: StepperLazyContentExample, selector: "stepper-lazy-content-example", ngImport: i0, template: "<mat-stepper orientation=\"vertical\">\n  <mat-step>\n    <ng-template matStepLabel>Step 1</ng-template>\n    <ng-template matStepContent>\n      <p>This content was rendered lazily</p>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 2</ng-template>\n    <ng-template matStepContent>\n      <p>This content was also rendered lazily</p>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 3</ng-template>\n    <p>This content was rendered eagerly</p>\n    <button mat-button matStepperPrevious>Back</button>\n  </mat-step>\n</mat-stepper>\n", dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "directive", type: i2.MatStepContent, selector: "ng-template[matStepContent]" }] }); }
}
export { StepperLazyContentExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: StepperLazyContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-lazy-content-example', template: "<mat-stepper orientation=\"vertical\">\n  <mat-step>\n    <ng-template matStepLabel>Step 1</ng-template>\n    <ng-template matStepContent>\n      <p>This content was rendered lazily</p>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 2</ng-template>\n    <ng-template matStepContent>\n      <p>This content was also rendered lazily</p>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 3</ng-template>\n    <p>This content was rendered eagerly</p>\n    <button mat-button matStepperPrevious>Back</button>\n  </mat-step>\n</mat-stepper>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLHlCQUF5QjttSEFBekIseUJBQXlCO3VHQUF6Qix5QkFBeUIsb0VDVHRDLDR3QkFzQkE7O1NEYmEseUJBQXlCO2dHQUF6Qix5QkFBeUI7a0JBSnJDLFNBQVM7K0JBQ0UsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIGxhenkgY29udGVudCByZW5kZXJpbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckxhenlDb250ZW50RXhhbXBsZSB7fVxuIiwiPG1hdC1zdGVwcGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+U3RlcCAxPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcENvbnRlbnQ+XG4gICAgICA8cD5UaGlzIGNvbnRlbnQgd2FzIHJlbmRlcmVkIGxhemlseTwvcD5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+U3RlcCAyPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcENvbnRlbnQ+XG4gICAgICA8cD5UaGlzIGNvbnRlbnQgd2FzIGFsc28gcmVuZGVyZWQgbGF6aWx5PC9wPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPlN0ZXAgMzwvbmctdGVtcGxhdGU+XG4gICAgPHA+VGhpcyBjb250ZW50IHdhcyByZW5kZXJlZCBlYWdlcmx5PC9wPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICA8L21hdC1zdGVwPlxuPC9tYXQtc3RlcHBlcj5cbiJdfQ==