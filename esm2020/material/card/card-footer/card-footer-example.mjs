import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/card";
import * as i3 from "@angular/material/divider";
import * as i4 from "@angular/material/progress-bar";
/**
 * @title Card with footer
 */
export class CardFooterExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardFooterExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: CardFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardFooterExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-rc.0", type: CardFooterExample, selector: "card-footer-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    <mat-card-title>Shiba Inu</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n    <mat-divider></mat-divider>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i2.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i2.MatCardContent, selector: "mat-card-content" }, { kind: "directive", type: i2.MatCardFooter, selector: "mat-card-footer" }, { kind: "component", type: i2.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i2.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i2.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "component", type: i3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: CardFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-footer-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    <mat-card-title>Shiba Inu</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n    <mat-divider></mat-divider>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFNRSxhQUFRLEdBQUc7OytCQUVrQixDQUFDO0tBQy9COzttSEFKWSxpQkFBaUI7dUdBQWpCLGlCQUFpQiwyRENWOUIsMGxCQWtCQTtnR0RSYSxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggZm9vdGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtZm9vdGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtZm9vdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJkLWZvb3Rlci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRm9vdGVyRXhhbXBsZSB7XG4gIGxvbmdUZXh0ID0gYFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2dcbiAgZnJvbSBKYXBhbi4gQSBzbWFsbCwgYWdpbGUgZG9nIHRoYXQgY29wZXMgdmVyeSB3ZWxsIHdpdGggbW91bnRhaW5vdXMgdGVycmFpbiwgdGhlIFNoaWJhIEludSB3YXNcbiAgb3JpZ2luYWxseSBicmVkIGZvciBodW50aW5nLmA7XG59XG4iLCI8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8bWF0LWNhcmQtc3VidGl0bGU+RG9nIEJyZWVkPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxwPlRoaXMgY2FyZCBoYXMgZGl2aWRlciBhbmQgaW5kZXRlcm1pbmF0ZSBwcm9ncmVzcyBhcyBmb290ZXI8L3A+XG4gICAgPHA+e3sgbG9uZ1RleHQgfX08L3A+XG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbiAgPG1hdC1jYXJkLWFjdGlvbnM+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+U0hBUkU8L2J1dHRvbj5cbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuICA8bWF0LWNhcmQtZm9vdGVyPlxuICAgIDxtYXQtcHJvZ3Jlc3MtYmFyIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICA8L21hdC1jYXJkLWZvb3Rlcj5cbjwvbWF0LWNhcmQ+XG4iXX0=