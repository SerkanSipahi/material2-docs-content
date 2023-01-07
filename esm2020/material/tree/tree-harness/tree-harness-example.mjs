import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/tree";
const FLAT_TREE_DATA = [
    {
        name: 'Flat Group 1',
        children: [{ name: 'Flat Leaf 1.1' }, { name: 'Flat Leaf 1.2' }, { name: 'Flat Leaf 1.3' }],
    },
    {
        name: 'Flat Group 2',
        children: [
            {
                name: 'Flat Group 2.1',
                children: [{ name: 'Flat Leaf 2.1.1' }, { name: 'Flat Leaf 2.1.2' }, { name: 'Flat Leaf 2.1.3' }],
            },
        ],
    },
];
/**
 * @title Testing with MatTreeHarness
 */
export class TreeHarnessExample {
    constructor() {
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = FLAT_TREE_DATA;
    }
}
TreeHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: TreeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TreeHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-rc.0", type: TreeHarnessExample, selector: "tree-harness-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", dependencies: [{ kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i3.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i3.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i3.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i3.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i3.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: TreeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-harness-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n" }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtaGFybmVzcy90cmVlLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1oYXJuZXNzL3RyZWUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBTy9FLE1BQU0sY0FBYyxHQUFXO0lBQzdCO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsUUFBUSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLENBQUM7S0FDdEY7SUFDRDtRQUNFLElBQUksRUFBRSxjQUFjO1FBQ3BCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFFBQVEsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQyxDQUFDO2FBQzVGO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFRRjs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7SUF1QjdCO1FBdEJRLGlCQUFZLEdBQUcsQ0FBQyxJQUFVLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDbkQsT0FBTztnQkFDTCxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDdkQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUVGLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUN4QixDQUFDO1FBRUYsa0JBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUNsQyxJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUN0QixDQUFDO1FBRUYsZUFBVSxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFNN0UsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFIL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7O29IQXpCVSxrQkFBa0I7d0dBQWxCLGtCQUFrQiw0REN0Qy9CLDh5QkFrQkE7Z0dEb0JhLGtCQUFrQjtrQkFKOUIsU0FBUzsrQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVGbGF0dGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuXG5pbnRlcmZhY2UgTm9kZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hpbGRyZW4/OiBOb2RlW107XG59XG5cbmNvbnN0IEZMQVRfVFJFRV9EQVRBOiBOb2RlW10gPSBbXG4gIHtcbiAgICBuYW1lOiAnRmxhdCBHcm91cCAxJyxcbiAgICBjaGlsZHJlbjogW3tuYW1lOiAnRmxhdCBMZWFmIDEuMSd9LCB7bmFtZTogJ0ZsYXQgTGVhZiAxLjInfSwge25hbWU6ICdGbGF0IExlYWYgMS4zJ31dLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0ZsYXQgR3JvdXAgMicsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0ZsYXQgR3JvdXAgMi4xJyxcbiAgICAgICAgY2hpbGRyZW46IFt7bmFtZTogJ0ZsYXQgTGVhZiAyLjEuMSd9LCB7bmFtZTogJ0ZsYXQgTGVhZiAyLjEuMid9LCB7bmFtZTogJ0ZsYXQgTGVhZiAyLjEuMyd9XSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmludGVyZmFjZSBFeGFtcGxlRmxhdE5vZGUge1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG59XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRUcmVlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndHJlZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVIYXJuZXNzRXhhbXBsZSB7XG4gIHByaXZhdGUgX3RyYW5zZm9ybWVyID0gKG5vZGU6IE5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwYW5kYWJsZTogISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCxcbiAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgIGxldmVsOiBsZXZlbCxcbiAgICB9O1xuICB9O1xuXG4gIHRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxFeGFtcGxlRmxhdE5vZGU+KFxuICAgIG5vZGUgPT4gbm9kZS5sZXZlbCxcbiAgICBub2RlID0+IG5vZGUuZXhwYW5kYWJsZSxcbiAgKTtcblxuICB0cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIoXG4gICAgdGhpcy5fdHJhbnNmb3JtZXIsXG4gICAgbm9kZSA9PiBub2RlLmxldmVsLFxuICAgIG5vZGUgPT4gbm9kZS5leHBhbmRhYmxlLFxuICAgIG5vZGUgPT4gbm9kZS5jaGlsZHJlbixcbiAgKTtcblxuICBkYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gRkxBVF9UUkVFX0RBVEE7XG4gIH1cblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlO1xufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9tYXQtdHJlZS1ub2RlPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7d2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5uYW1lXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cbjwvbWF0LXRyZWU+XG4iXX0=