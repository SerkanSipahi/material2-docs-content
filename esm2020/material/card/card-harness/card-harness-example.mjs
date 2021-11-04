import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Testing with MatCardHarness
 */
export class CardHarnessExample {
}
CardHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CardHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: CardHarnessExample, selector: "card-harness-example", ngImport: i0, template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1.MatCardHeader, selector: "mat-card-header" }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i1.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CardHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-harness-example', template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtaGFybmVzcy9jYXJkLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1oYXJuZXNzL2NhcmQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7bUdBQWxCLGtCQUFrQiw0RENUL0IsbXFCQXFCQTsyRkRaYSxrQkFBa0I7a0JBSjlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0Q2FyZEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FyZC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkSGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtY2FyZD5cbjwvbWF0LWNhcmQ+XG48bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBtYXQtY2FyZC1hdmF0YXI+PC9kaXY+XG4gICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPkRvZyBCcmVlZDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8ZGl2IG1hdC1jYXJkLWltYWdlPjwvZGl2PlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5cbiAgICAgIFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2cgZnJvbVxuICAgICAgSmFwYW4uIEEgc21hbGwsIGFnaWxlIGRvZyB0aGF0IGNvcGVzIHZlcnkgd2VsbCB3aXRoIG1vdW50YWlub3VzIHRlcnJhaW4sIHRoZSBTaGliYSBJbnVcbiAgICAgIHdhcyBvcmlnaW5hbGx5IGJyZWQgZm9yIGh1bnRpbmcuXG4gICAgPC9wPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+XG4iXX0=