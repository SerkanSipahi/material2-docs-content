import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
/**
 * @title Basic checkboxes
 */
class CheckboxOverviewExample {
    constructor() {
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' },
            ],
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => (t.completed = completed));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CheckboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CheckboxOverviewExample, selector: "checkbox-overview-example", ngImport: i0, template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
export { CheckboxOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CheckboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-overview-example', template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1vdmVydmlldy9jaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFVeEM7O0dBRUc7QUFDSCxNQUthLHVCQUF1QjtJQUxwQztRQU1FLFNBQUksR0FBUztZQUNYLElBQUksRUFBRSxlQUFlO1lBQ3JCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRTtnQkFDUixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO2dCQUNyRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO2dCQUNuRCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO2FBQ2hEO1NBQ0YsQ0FBQztRQUVGLGdCQUFXLEdBQVksS0FBSyxDQUFDO0tBb0I5QjtJQWxCQyxpQkFBaUI7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDckYsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUM5QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzhHQS9CVSx1QkFBdUI7a0dBQXZCLHVCQUF1QixpRUNsQnBDLHU3QkEyQkE7O1NEVGEsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhc2sge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbXBsZXRlZDogYm9vbGVhbjtcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgc3VidGFza3M/OiBUYXNrW107XG59XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGNoZWNrYm94ZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94T3ZlcnZpZXdFeGFtcGxlIHtcbiAgdGFzazogVGFzayA9IHtcbiAgICBuYW1lOiAnSW5kZXRlcm1pbmF0ZScsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHN1YnRhc2tzOiBbXG4gICAgICB7bmFtZTogJ1ByaW1hcnknLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ3ByaW1hcnknfSxcbiAgICAgIHtuYW1lOiAnQWNjZW50JywgY29tcGxldGVkOiBmYWxzZSwgY29sb3I6ICdhY2NlbnQnfSxcbiAgICAgIHtuYW1lOiAnV2FybicsIGNvbXBsZXRlZDogZmFsc2UsIGNvbG9yOiAnd2Fybid9LFxuICAgIF0sXG4gIH07XG5cbiAgYWxsQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICB1cGRhdGVBbGxDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmFsbENvbXBsZXRlID0gdGhpcy50YXNrLnN1YnRhc2tzICE9IG51bGwgJiYgdGhpcy50YXNrLnN1YnRhc2tzLmV2ZXJ5KHQgPT4gdC5jb21wbGV0ZWQpO1xuICB9XG5cbiAgc29tZUNvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnRhc2suc3VidGFza3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50YXNrLnN1YnRhc2tzLmZpbHRlcih0ID0+IHQuY29tcGxldGVkKS5sZW5ndGggPiAwICYmICF0aGlzLmFsbENvbXBsZXRlO1xuICB9XG5cbiAgc2V0QWxsKGNvbXBsZXRlZDogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsQ29tcGxldGUgPSBjb21wbGV0ZWQ7XG4gICAgaWYgKHRoaXMudGFzay5zdWJ0YXNrcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGFzay5zdWJ0YXNrcy5mb3JFYWNoKHQgPT4gKHQuY29tcGxldGVkID0gY29tcGxldGVkKSk7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiPkNoZWNrIG1lITwvbWF0LWNoZWNrYm94PlxuICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPkRpc2FibGVkPC9tYXQtY2hlY2tib3g+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCI+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1saXN0LXNlY3Rpb25cIj5cbiAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiYWxsQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cInRhc2suY29sb3JcIlxuICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwic29tZUNvbXBsZXRlKClcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZXRBbGwoJGV2ZW50LmNoZWNrZWQpXCI+XG4gICAgICB7e3Rhc2submFtZX19XG4gICAgPC9tYXQtY2hlY2tib3g+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWxpc3Qtc2VjdGlvblwiPlxuICAgIDx1bD5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc3VidGFzayBvZiB0YXNrLnN1YnRhc2tzXCI+XG4gICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzdWJ0YXNrLmNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cInN1YnRhc2suY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUFsbENvbXBsZXRlKClcIj5cbiAgICAgICAgICB7e3N1YnRhc2submFtZX19XG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L3NwYW4+XG48L3NlY3Rpb24+XG4iXX0=