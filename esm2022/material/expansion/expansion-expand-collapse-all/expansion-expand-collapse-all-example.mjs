import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/expansion";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/form-field";
/**
 * @title Accordion with expand/collapse all toggles
 */
class ExpansionExpandCollapseAllExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ExpansionExpandCollapseAllExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ExpansionExpandCollapseAllExample, selector: "expansion-expand-collapse-all-example", viewQueries: [{ propertyName: "accordion", first: true, predicate: MatAccordion, descendants: true }], ngImport: i0, template: "<div class=\"example-action-buttons\">\n  <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n  <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<!-- #docregion multi -->\n<mat-accordion class=\"example-headers-align\" multi>\n<!-- #enddocregion multi -->\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Age</mat-label>\n      <input matInput type=\"number\" min=\"1\">\n    </mat-form-field>\n\n  </mat-expansion-panel>\n<!-- #docregion disabled -->\n  <mat-expansion-panel disabled>\n<!-- #enddocregion disabled -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Country</mat-label>\n      <input matInput>\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "directive", type: i3.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i3.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i3.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i3.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "directive", type: i3.MatExpansionPanelDescription, selector: "mat-panel-description" }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i6.MatLabel, selector: "mat-label" }] }); }
}
export { ExpansionExpandCollapseAllExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ExpansionExpandCollapseAllExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-expand-collapse-all-example', template: "<div class=\"example-action-buttons\">\n  <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n  <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<!-- #docregion multi -->\n<mat-accordion class=\"example-headers-align\" multi>\n<!-- #enddocregion multi -->\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Age</mat-label>\n      <input matInput type=\"number\" min=\"1\">\n    </mat-form-field>\n\n  </mat-expansion-panel>\n<!-- #docregion disabled -->\n  <mat-expansion-panel disabled>\n<!-- #enddocregion disabled -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Country</mat-label>\n      <input matInput>\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"] }]
        }], propDecorators: { accordion: [{
                type: ViewChild,
                args: [MatAccordion]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsL2V4cGFuc2lvbi1leHBhbmQtY29sbGFwc2UtYWxsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7O0FBRXpEOztHQUVHO0FBQ0gsTUFLYSxpQ0FBaUM7bUhBQWpDLGlDQUFpQzt1R0FBakMsaUNBQWlDLHdIQUNqQyxZQUFZLGdEQ1p6QixvZ0VBa0VBOztTRHZEYSxpQ0FBaUM7Z0dBQWpDLGlDQUFpQztrQkFMN0MsU0FBUzsrQkFDRSx1Q0FBdUM7OEJBS3hCLFNBQVM7c0JBQWpDLFNBQVM7dUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRBY2NvcmRpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5cbi8qKlxuICogQHRpdGxlIEFjY29yZGlvbiB3aXRoIGV4cGFuZC9jb2xsYXBzZSBhbGwgdG9nZ2xlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uRXhwYW5kQ29sbGFwc2VBbGxFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZChNYXRBY2NvcmRpb24pIGFjY29yZGlvbjogTWF0QWNjb3JkaW9uO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvbnNcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJhY2NvcmRpb24ub3BlbkFsbCgpXCI+RXhwYW5kIEFsbDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImFjY29yZGlvbi5jbG9zZUFsbCgpXCI+Q29sbGFwc2UgQWxsPC9idXR0b24+XG48L2Rpdj5cbjwhLS0gI2RvY3JlZ2lvbiBtdWx0aSAtLT5cbjxtYXQtYWNjb3JkaW9uIGNsYXNzPVwiZXhhbXBsZS1oZWFkZXJzLWFsaWduXCIgbXVsdGk+XG48IS0tICNlbmRkb2NyZWdpb24gbXVsdGkgLS0+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFBlcnNvbmFsIGRhdGFcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgVHlwZSB5b3VyIG5hbWUgYW5kIGFnZVxuICAgICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5BZ2U8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPCEtLSAjZG9jcmVnaW9uIGRpc2FibGVkIC0tPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBkaXNhYmxlZD5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBkaXNhYmxlZCAtLT5cbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxuICAgICAgICBEZXN0aW5hdGlvblxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUeXBlIHRoZSBjb3VudHJ5IG5hbWVcbiAgICAgICAgPG1hdC1pY29uPm1hcDwvbWF0LWljb24+XG4gICAgICA8L21hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkNvdW50cnk8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+XG5cbiAgPG1hdC1leHBhbnNpb24tcGFuZWw+XG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cbiAgICAgICAgRGF5IG9mIHRoZSB0cmlwXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgICAgIEluZm9ybSB0aGUgZGF0ZSB5b3Ugd2lzaCB0byB0cmF2ZWxcbiAgICAgICAgPG1hdC1pY29uPmRhdGVfcmFuZ2U8L21hdC1pY29uPlxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cblxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5EYXRlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgKGZvY3VzKT1cInBpY2tlci5vcGVuKClcIiByZWFkb25seT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbjwvbWF0LWFjY29yZGlvbj5cbiJdfQ==