import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Testing with MatGridListHarness
 */
export class GridListHarnessExample {
}
GridListHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: GridListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
GridListHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: GridListHarnessExample, selector: "grid-list-harness-example", ngImport: i0, template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n", components: [{ type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { type: i1.MatGridTileText, selector: "mat-grid-tile-header, mat-grid-tile-footer" }], directives: [{ type: i1.MatGridTileHeaderCssMatStyler, selector: "mat-grid-tile-header" }, { type: i1.MatGridTileFooterCssMatStyler, selector: "mat-grid-tile-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: GridListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-harness-example', template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtaGFybmVzcy9ncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1oYXJuZXNzL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sc0JBQXNCOzttSEFBdEIsc0JBQXNCO3VHQUF0QixzQkFBc0IsaUVDVG5DLGtmQWFBOzJGREphLHNCQUFzQjtrQkFKbEMsU0FBUzsrQkFDRSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRHcmlkTGlzdEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3RIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC1ncmlkLWxpc3QgY29scz1cIjJcIiByb3dIZWlnaHQ9XCIxMDBweFwiPlxuICA8bWF0LWdyaWQtdGlsZT5UaWxlIDEgKG5vIGhlYWRlciwgbm8gZm9vdGVyKTwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+XG4gICAgPG1hdC1ncmlkLXRpbGUtaGVhZGVyPlRpbGUgMjwvbWF0LWdyaWQtdGlsZS1oZWFkZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjJcIj5cbiAgICA8bWF0LWdyaWQtdGlsZS1oZWFkZXI+VGlsZSAzPC9tYXQtZ3JpZC10aWxlLWhlYWRlcj5cbiAgICA8bWF0LWdyaWQtdGlsZS1mb290ZXI+VGlsZSAzIGZvb3RlcjwvbWF0LWdyaWQtdGlsZS1mb290ZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+XG4gICAgPG1hdC1ncmlkLXRpbGUtaGVhZGVyPlRpbGUgNDwvbWF0LWdyaWQtdGlsZS1oZWFkZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbjwvbWF0LWdyaWQtbGlzdD5cbiJdfQ==