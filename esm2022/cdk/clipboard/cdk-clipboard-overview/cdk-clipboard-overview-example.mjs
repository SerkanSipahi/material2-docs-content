import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/clipboard";
import * as i2 from "@angular/forms";
/**
 * @title Clipboard overview
 */
class CdkClipboardOverviewExample {
    constructor() {
        this.value = `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not ` +
            `a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord ` +
            `of the Sith, so powerful and so wise he could use the Force to influence the ` +
            `midichlorians to create life… He had such a knowledge of the dark side that he could ` +
            `even keep the ones he cared about from dying. The dark side of the Force is a pathway ` +
            `to many abilities some consider to be unnatural. He became so powerful… the only ` +
            `thing he was afraid of was losing his power, which eventually, of course, he did. ` +
            `Unfortunately, he taught his apprentice everything he knew, then his apprentice ` +
            `killed him in his sleep. Ironic. He could save others from death, but not himself.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkClipboardOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkClipboardOverviewExample, selector: "cdk-clipboard-overview-example", ngImport: i0, template: "<label for=\"clipboard-example-textarea\">Text to be copied</label>\n<textarea id=\"clipboard-example-textarea\" cols=\"30\" rows=\"10\" [(ngModel)]=\"value\"></textarea>\n<button [cdkCopyToClipboard]=\"value\">Copy to clipboard</button>\n", styles: ["textarea {\n  display: block;\n  margin: 4px 0 8px;\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkCopyToClipboard, selector: "[cdkCopyToClipboard]", inputs: ["cdkCopyToClipboard", "cdkCopyToClipboardAttempts"], outputs: ["cdkCopyToClipboardCopied"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
export { CdkClipboardOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkClipboardOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-clipboard-overview-example', template: "<label for=\"clipboard-example-textarea\">Text to be copied</label>\n<textarea id=\"clipboard-example-textarea\" cols=\"30\" rows=\"10\" [(ngModel)]=\"value\"></textarea>\n<button [cdkCopyToClipboard]=\"value\">Copy to clipboard</button>\n", styles: ["textarea {\n  display: block;\n  margin: 4px 0 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2NsaXBib2FyZC9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3L2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9jbGlwYm9hcmQvY2RrLWNsaXBib2FyZC1vdmVydmlldy9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0gsTUFLYSwyQkFBMkI7SUFMeEM7UUFNRSxVQUFLLEdBQ0gsb0ZBQW9GO1lBQ3BGLHNGQUFzRjtZQUN0RiwrRUFBK0U7WUFDL0UsdUZBQXVGO1lBQ3ZGLHdGQUF3RjtZQUN4RixtRkFBbUY7WUFDbkYsb0ZBQW9GO1lBQ3BGLGtGQUFrRjtZQUNsRixvRkFBb0YsQ0FBQztLQUN4Rjs4R0FYWSwyQkFBMkI7a0dBQTNCLDJCQUEyQixzRUNWeEMsaVBBR0E7O1NET2EsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBTHZDLFNBQVM7K0JBQ0UsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDbGlwYm9hcmQgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0NsaXBib2FyZE92ZXJ2aWV3RXhhbXBsZSB7XG4gIHZhbHVlID1cbiAgICBgRGlkIHlvdSBldmVyIGhlYXIgdGhlIHRyYWdlZHkgb2YgRGFydGggUGxhZ3VlaXMgVGhlIFdpc2U/IEkgdGhvdWdodCBub3QuIEl0J3Mgbm90IGAgK1xuICAgIGBhIHN0b3J5IHRoZSBKZWRpIHdvdWxkIHRlbGwgeW91LiBJdCdzIGEgU2l0aCBsZWdlbmQuIERhcnRoIFBsYWd1ZWlzIHdhcyBhIERhcmsgTG9yZCBgICtcbiAgICBgb2YgdGhlIFNpdGgsIHNvIHBvd2VyZnVsIGFuZCBzbyB3aXNlIGhlIGNvdWxkIHVzZSB0aGUgRm9yY2UgdG8gaW5mbHVlbmNlIHRoZSBgICtcbiAgICBgbWlkaWNobG9yaWFucyB0byBjcmVhdGUgbGlmZeKApiBIZSBoYWQgc3VjaCBhIGtub3dsZWRnZSBvZiB0aGUgZGFyayBzaWRlIHRoYXQgaGUgY291bGQgYCArXG4gICAgYGV2ZW4ga2VlcCB0aGUgb25lcyBoZSBjYXJlZCBhYm91dCBmcm9tIGR5aW5nLiBUaGUgZGFyayBzaWRlIG9mIHRoZSBGb3JjZSBpcyBhIHBhdGh3YXkgYCArXG4gICAgYHRvIG1hbnkgYWJpbGl0aWVzIHNvbWUgY29uc2lkZXIgdG8gYmUgdW5uYXR1cmFsLiBIZSBiZWNhbWUgc28gcG93ZXJmdWzigKYgdGhlIG9ubHkgYCArXG4gICAgYHRoaW5nIGhlIHdhcyBhZnJhaWQgb2Ygd2FzIGxvc2luZyBoaXMgcG93ZXIsIHdoaWNoIGV2ZW50dWFsbHksIG9mIGNvdXJzZSwgaGUgZGlkLiBgICtcbiAgICBgVW5mb3J0dW5hdGVseSwgaGUgdGF1Z2h0IGhpcyBhcHByZW50aWNlIGV2ZXJ5dGhpbmcgaGUga25ldywgdGhlbiBoaXMgYXBwcmVudGljZSBgICtcbiAgICBga2lsbGVkIGhpbSBpbiBoaXMgc2xlZXAuIElyb25pYy4gSGUgY291bGQgc2F2ZSBvdGhlcnMgZnJvbSBkZWF0aCwgYnV0IG5vdCBoaW1zZWxmLmA7XG59XG4iLCI8bGFiZWwgZm9yPVwiY2xpcGJvYXJkLWV4YW1wbGUtdGV4dGFyZWFcIj5UZXh0IHRvIGJlIGNvcGllZDwvbGFiZWw+XG48dGV4dGFyZWEgaWQ9XCJjbGlwYm9hcmQtZXhhbXBsZS10ZXh0YXJlYVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIFsobmdNb2RlbCldPVwidmFsdWVcIj48L3RleHRhcmVhPlxuPGJ1dHRvbiBbY2RrQ29weVRvQ2xpcGJvYXJkXT1cInZhbHVlXCI+Q29weSB0byBjbGlwYm9hcmQ8L2J1dHRvbj5cbiJdfQ==