import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/listbox";
/** @title Horizontal listbox */
export class CdkListboxHorizontalExample {
    constructor() {
        this.sizes = ['XS', 'S', 'M', 'L', 'XL'];
    }
}
CdkListboxHorizontalExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CdkListboxHorizontalExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxHorizontalExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: CdkListboxHorizontalExample, selector: "cdk-listbox-horizontal-example", exportAs: ["cdkListboxhorizontalExample"], ngImport: i0, template: "<!-- #docregion listbox -->\n<label class=\"example-listbox-label\" id=\"example-shirt-size-label\">\n  Shirt Size\n</label>\n<ul cdkListbox\n    cdkListboxOrientation=\"horizontal\"\n    aria-labelledby=\"example-shirt-size-label\"\n    class=\"example-listbox\">\n  <li *ngFor=\"let size of sizes\"\n      [cdkOption]=\"size\"\n      class=\"example-option\">\n    {{size}}\n  </li>\n</ul>\n<!-- #enddocregion listbox -->\n", styles: [".example-listbox {\n  display: flex;\n  width: 250px;\n  padding: 0;\n}\n\n.example-option {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  list-style: none;\n  padding: 12px;\n  border: solid black;\n  border-width: 1px 1px 1px 0;\n}\n\n.example-option:first-child {\n  border-left-width: 1px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  position: absolute;\n  border: 2px solid black;\n  top: 3px;\n  bottom: 3px;\n  left: 3px;\n  right: 3px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i2.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CdkListboxHorizontalExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-horizontal-example', exportAs: 'cdkListboxhorizontalExample', template: "<!-- #docregion listbox -->\n<label class=\"example-listbox-label\" id=\"example-shirt-size-label\">\n  Shirt Size\n</label>\n<ul cdkListbox\n    cdkListboxOrientation=\"horizontal\"\n    aria-labelledby=\"example-shirt-size-label\"\n    class=\"example-listbox\">\n  <li *ngFor=\"let size of sizes\"\n      [cdkOption]=\"size\"\n      class=\"example-option\">\n    {{size}}\n  </li>\n</ul>\n<!-- #enddocregion listbox -->\n", styles: [".example-listbox {\n  display: flex;\n  width: 250px;\n  padding: 0;\n}\n\n.example-option {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  list-style: none;\n  padding: 12px;\n  border: solid black;\n  border-width: 1px 1px 1px 0;\n}\n\n.example-option:first-child {\n  border-left-width: 1px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  position: absolute;\n  border: 2px solid black;\n  top: 3px;\n  bottom: 3px;\n  left: 3px;\n  right: 3px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtaG9yaXpvbnRhbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtaG9yaXpvbnRhbC9jZGstbGlzdGJveC1ob3Jpem9udGFsLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1ob3Jpem9udGFsL2Nkay1saXN0Ym94LWhvcml6b250YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEMsZ0NBQWdDO0FBT2hDLE1BQU0sT0FBTywyQkFBMkI7SUFOeEM7UUFPRSxVQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDckM7OytIQUZZLDJCQUEyQjttSEFBM0IsMkJBQTJCLGlIQ1R4QywyYUFlQTtrR0ROYSwyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0UsZ0NBQWdDLFlBQ2hDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBIb3Jpem9udGFsIGxpc3Rib3ggKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LWhvcml6b250YWwtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTGlzdGJveGhvcml6b250YWxFeGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbGlzdGJveC1ob3Jpem9udGFsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1ob3Jpem9udGFsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hIb3Jpem9udGFsRXhhbXBsZSB7XG4gIHNpemVzID0gWydYUycsICdTJywgJ00nLCAnTCcsICdYTCddO1xufVxuIiwiPCEtLSAjZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG48bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtc2hpcnQtc2l6ZS1sYWJlbFwiPlxuICBTaGlydCBTaXplXG48L2xhYmVsPlxuPHVsIGNka0xpc3Rib3hcbiAgICBjZGtMaXN0Ym94T3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXNoaXJ0LXNpemUtbGFiZWxcIlxuICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gIDxsaSAqbmdGb3I9XCJsZXQgc2l6ZSBvZiBzaXplc1wiXG4gICAgICBbY2RrT3B0aW9uXT1cInNpemVcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgIHt7c2l6ZX19XG4gIDwvbGk+XG48L3VsPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4iXX0=