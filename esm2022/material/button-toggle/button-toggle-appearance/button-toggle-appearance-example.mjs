import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Button toggle appearance
 */
class ButtonToggleAppearanceExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ButtonToggleAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: ButtonToggleAppearanceExample, selector: "button-toggle-appearance-example", ngImport: i0, template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
export { ButtonToggleAppearanceExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ButtonToggleAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-appearance-example', template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFLYSw2QkFBNkI7OEdBQTdCLDZCQUE2QjtrR0FBN0IsNkJBQTZCLHdFQ1YxQyx5c0JBaUJBOztTRFBhLDZCQUE2QjsyRkFBN0IsNkJBQTZCO2tCQUx6QyxTQUFTOytCQUNFLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQnV0dG9uIHRvZ2dsZSBhcHBlYXJhbmNlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSB7fVxuIiwiPHA+XG4gIERlZmF1bHQgYXBwZWFyYW5jZTpcbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIG5hbWU9XCJmb250U3R5bGVcIiBhcmlhLWxhYmVsPVwiRm9udCBTdHlsZVwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImJvbGRcIj5Cb2xkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJpdGFsaWNcIj5JdGFsaWM8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInVuZGVybGluZVwiPlVuZGVybGluZTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG48L3A+XG5cbjxwPlxuICBMZWdhY3kgYXBwZWFyYW5jZTpcbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIGFwcGVhcmFuY2U9XCJsZWdhY3lcIiBuYW1lPVwiZm9udFN0eWxlXCIgYXJpYS1sYWJlbD1cIkZvbnQgU3R5bGVcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJib2xkXCI+Qm9sZDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaXRhbGljXCI+SXRhbGljPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ1bmRlcmxpbmVcIj5VbmRlcmxpbmU8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9wPlxuIl19