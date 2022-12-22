import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with dynamic height based on tab contents
 */
export class TabGroupDynamicHeightExample {
}
TabGroupDynamicHeightExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: TabGroupDynamicHeightExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupDynamicHeightExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: TabGroupDynamicHeightExample, selector: "tab-group-dynamic-height-example", ngImport: i0, template: "<!-- #docregion dynamic-height -->\n<mat-tab-group dynamicHeight>\n<!-- #enddocregion dynamic-height -->\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: TabGroupDynamicHeightExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-dynamic-height-example', template: "<!-- #docregion dynamic-height -->\n<mat-tab-group dynamicHeight>\n<!-- #enddocregion dynamic-height -->\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1keW5hbWljLWhlaWdodC90YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0L3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLDRCQUE0Qjs7Z0lBQTVCLDRCQUE0QjtvSEFBNUIsNEJBQTRCLHdFQ1Z6Qyw2WUFjQTtrR0RKYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0Usa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBkeW5hbWljIGhlaWdodCBiYXNlZCBvbiB0YWIgY29udGVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwRHluYW1pY0hlaWdodEV4YW1wbGUge31cbiIsIjwhLS0gI2RvY3JlZ2lvbiBkeW5hbWljLWhlaWdodCAtLT5cbjxtYXQtdGFiLWdyb3VwIGR5bmFtaWNIZWlnaHQ+XG48IS0tICNlbmRkb2NyZWdpb24gZHluYW1pYy1oZWlnaHQgLS0+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2hvcnQgdGFiXCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc21hbGwtYm94IG1hdC1lbGV2YXRpb24tejRcIj5cbiAgICAgIFNtYWxsIGNvbnRlbnRcbiAgICA8L2Rpdj5cbiAgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkxvbmcgdGFiXCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFyZ2UtYm94IG1hdC1lbGV2YXRpb24tejRcIj5cbiAgICAgIExhcmdlIGNvbnRlbnRcbiAgICA8L2Rpdj5cbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19