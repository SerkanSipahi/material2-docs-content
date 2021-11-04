import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/accordion";
import * as i2 from "@angular/common";
/**
 * @title Accordion overview
 */
export class CdkAccordionOverviewExample {
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        this.expandedIndex = 0;
    }
}
CdkAccordionOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CdkAccordionOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkAccordionOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: CdkAccordionOverviewExample, selector: "cdk-accordion-overview-example", ngImport: i0, template: "<cdk-accordion class=\"example-accordion\">\n  <cdk-accordion-item\n    *ngFor=\"let item of items; let index = index;\"\n    #accordionItem=\"cdkAccordionItem\"\n    class=\"example-accordion-item\"\n    role=\"button\"\n    tabindex=\"0\"\n    [attr.id]=\"'accordion-header-' + index\"\n    [attr.aria-expanded]=\"accordionItem.expanded\"\n    [attr.aria-controls]=\"'accordion-body-' + index\">\n    <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n      {{ item }}\n      <span class=\"example-accordion-item-description\">\n        Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n      </span>\n    </div>\n    <div\n      class=\"example-accordion-item-body\"\n      role=\"region\"\n      [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n      [attr.id]=\"'accordion-body-' + index\"\n      [attr.aria-labelledby]=\"'accordion-header-' + index\">\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n      veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n    </div>\n  </cdk-accordion-item>\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"], directives: [{ type: i1.CdkAccordion, selector: "cdk-accordion, [cdkAccordion]", inputs: ["multi"], exportAs: ["cdkAccordion"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.CdkAccordionItem, selector: "cdk-accordion-item, [cdkAccordionItem]", inputs: ["expanded", "disabled"], outputs: ["closed", "opened", "destroyed", "expandedChange"], exportAs: ["cdkAccordionItem"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CdkAccordionOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-accordion-overview-example', template: "<cdk-accordion class=\"example-accordion\">\n  <cdk-accordion-item\n    *ngFor=\"let item of items; let index = index;\"\n    #accordionItem=\"cdkAccordionItem\"\n    class=\"example-accordion-item\"\n    role=\"button\"\n    tabindex=\"0\"\n    [attr.id]=\"'accordion-header-' + index\"\n    [attr.aria-expanded]=\"accordionItem.expanded\"\n    [attr.aria-controls]=\"'accordion-body-' + index\">\n    <div class=\"example-accordion-item-header\" (click)=\"accordionItem.toggle()\">\n      {{ item }}\n      <span class=\"example-accordion-item-description\">\n        Click to {{ accordionItem.expanded ? 'close' : 'open' }}\n      </span>\n    </div>\n    <div\n      class=\"example-accordion-item-body\"\n      role=\"region\"\n      [style.display]=\"accordionItem.expanded ? '' : 'none'\"\n      [attr.id]=\"'accordion-body-' + index\"\n      [attr.aria-labelledby]=\"'accordion-header-' + index\">\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis\n      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis\n      veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?\n    </div>\n  </cdk-accordion-item>\n</cdk-accordion>\n\n", styles: [".example-accordion {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item + .example-accordion-item {\n  border-top: none;\n}\n\n.example-accordion-item-header {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header,\n.example-accordion-item-body {\n  padding: 16px;\n}\n\n.example-accordion-item-header:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWFjY29yZGlvbi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2FjY29yZGlvbi9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3L2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9hY2NvcmRpb24vY2RrLWFjY29yZGlvbi1vdmVydmlldy9jZGstYWNjb3JkaW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLDJCQUEyQjtJQUx4QztRQU1FLFVBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzRCxrQkFBYSxHQUFHLENBQUMsQ0FBQztLQUNuQjs7d0hBSFksMkJBQTJCOzRHQUEzQiwyQkFBMkIsc0VDVnhDLDByQ0E2QkE7MkZEbkJhLDJCQUEyQjtrQkFMdkMsU0FBUzsrQkFDRSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEFjY29yZGlvbiBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstYWNjb3JkaW9uLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1hY2NvcmRpb24tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQWNjb3JkaW9uT3ZlcnZpZXdFeGFtcGxlIHtcbiAgaXRlbXMgPSBbJ0l0ZW0gMScsICdJdGVtIDInLCAnSXRlbSAzJywgJ0l0ZW0gNCcsICdJdGVtIDUnXTtcbiAgZXhwYW5kZWRJbmRleCA9IDA7XG59XG4iLCI8Y2RrLWFjY29yZGlvbiBjbGFzcz1cImV4YW1wbGUtYWNjb3JkaW9uXCI+XG4gIDxjZGstYWNjb3JkaW9uLWl0ZW1cbiAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4ID0gaW5kZXg7XCJcbiAgICAjYWNjb3JkaW9uSXRlbT1cImNka0FjY29yZGlvbkl0ZW1cIlxuICAgIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbVwiXG4gICAgcm9sZT1cImJ1dHRvblwiXG4gICAgdGFiaW5kZXg9XCIwXCJcbiAgICBbYXR0ci5pZF09XCInYWNjb3JkaW9uLWhlYWRlci0nICsgaW5kZXhcIlxuICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiYWNjb3JkaW9uSXRlbS5leHBhbmRlZFwiXG4gICAgW2F0dHIuYXJpYS1jb250cm9sc109XCInYWNjb3JkaW9uLWJvZHktJyArIGluZGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYWNjb3JkaW9uLWl0ZW0taGVhZGVyXCIgKGNsaWNrKT1cImFjY29yZGlvbkl0ZW0udG9nZ2xlKClcIj5cbiAgICAgIHt7IGl0ZW0gfX1cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbS1kZXNjcmlwdGlvblwiPlxuICAgICAgICBDbGljayB0byB7eyBhY2NvcmRpb25JdGVtLmV4cGFuZGVkID8gJ2Nsb3NlJyA6ICdvcGVuJyB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY2NvcmRpb24taXRlbS1ib2R5XCJcbiAgICAgIHJvbGU9XCJyZWdpb25cIlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwiYWNjb3JkaW9uSXRlbS5leHBhbmRlZCA/ICcnIDogJ25vbmUnXCJcbiAgICAgIFthdHRyLmlkXT1cIidhY2NvcmRpb24tYm9keS0nICsgaW5kZXhcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIidhY2NvcmRpb24taGVhZGVyLScgKyBpbmRleFwiPlxuICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcmZlcmVuZGlzXG4gICAgICBleGNlcHR1cmkgaW5jaWR1bnQgaXBzdW0gZGVsZW5pdGkgbGFib3JlLCB0ZW1wb3JlIG5vbiBuYW0gZG9sb3JpYnVzIGJsYW5kaXRpaXNcbiAgICAgIHZlcml0YXRpcyBpbGxvIGF1dGVtIGl1cmUgYWxpcXVpZCB1bGxhbSByZW0gdGVuZXR1ciBkZXNlcnVudCB2ZWxpdCBjdWxwYT9cbiAgICA8L2Rpdj5cbiAgPC9jZGstYWNjb3JkaW9uLWl0ZW0+XG48L2Nkay1hY2NvcmRpb24+XG5cbiJdfQ==