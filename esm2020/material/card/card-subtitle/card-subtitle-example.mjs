import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Card with sub-title
 */
export class CardSubtitleExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardSubtitleExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CardSubtitleExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardSubtitleExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: CardSubtitleExample, selector: "card-subtitle-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CardSubtitleExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-subtitle-example', template: "<mat-card class=\"example-card\">\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zdWJ0aXRsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLXN1YnRpdGxlL2NhcmQtc3VidGl0bGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1zdWJ0aXRsZS9jYXJkLXN1YnRpdGxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLGFBQVEsR0FBRzs7K0JBRWtCLENBQUM7S0FDL0I7O2dIQUpZLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDZEQ1ZoQyxxWUFXVzsyRkRERSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggc3ViLXRpdGxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtc3VidGl0bGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1zdWJ0aXRsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2FyZC1zdWJ0aXRsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkU3VidGl0bGVFeGFtcGxlIHtcbiAgbG9uZ1RleHQgPSBgVGhlIFNoaWJhIEludSBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIHNpeCBvcmlnaW5hbCBhbmQgZGlzdGluY3Qgc3BpdHogYnJlZWRzIG9mIGRvZ1xuICBmcm9tIEphcGFuLiBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhc1xuICBvcmlnaW5hbGx5IGJyZWQgZm9yIGh1bnRpbmcuYDtcbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxuICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgPG1hdC1jYXJkLXN1YnRpdGxlPkRvZyBCcmVlZDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxwPlRoaXMgY2FyZCBpbmRldGVybWluYXRlcyBwcm9ncmVzcyBiYXIuPC9wPlxuICAgIDxwPnt7bG9uZ1RleHR9fTwvcD5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICA8L21hdC1jYXJkLWFjdGlvbnM+XG48L21hdC1jYXJkPiJdfQ==