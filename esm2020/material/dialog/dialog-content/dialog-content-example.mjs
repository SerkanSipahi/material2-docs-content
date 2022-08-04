import { Component } from '@angular/core';
import { MatLegacyDialog } from '@angular/material/legacy-dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog with header, scrollable content and actions
 */
export class DialogContentExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogContentExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
DialogContentExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: DialogContentExample, deps: [{ token: i1.MatLegacyDialog }], target: i0.ɵɵFactoryTarget.Component });
DialogContentExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: DialogContentExample, selector: "dialog-content-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: DialogContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-content-example', template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatLegacyDialog }]; } });
export class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: DialogContentExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
DialogContentExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: DialogContentExampleDialog, selector: "dialog-content-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1.MatLegacyDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatLegacyDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatLegacyDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatLegacyDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: DialogContentExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-content-example-dialog', template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1jb250ZW50L2RpYWxvZy1jb250ZW50LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctY29udGVudC9kaWFsb2ctY29udGVudC1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRWhFOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUFHLENBQUM7SUFFOUMsVUFBVTtRQUNSLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFL0QsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7aUhBVFUsb0JBQW9CO3FHQUFwQixvQkFBb0IsOERDVmpDLG9FQUNBOzJGRFNhLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSx3QkFBd0I7O0FBbUJwQyxNQUFNLE9BQU8sMEJBQTBCOzt1SEFBMUIsMEJBQTBCOzJHQUExQiwwQkFBMEIscUVFMUJ2QyxzcUhBZ0VBOzJGRnRDYSwwQkFBMEI7a0JBSnRDLFNBQVM7K0JBQ0UsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRMZWdhY3lEaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1kaWFsb2cnO1xuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgd2l0aCBoZWFkZXIsIHNjcm9sbGFibGUgY29udGVudCBhbmQgYWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctY29udGVudC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctY29udGVudC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb250ZW50RXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdExlZ2FjeURpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ29udGVudEV4YW1wbGVEaWFsb2cpO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRGlhbG9nIHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWNvbnRlbnQtZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1jb250ZW50LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb250ZW50RXhhbXBsZURpYWxvZyB7fVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5PcGVuIGRpYWxvZzwvYnV0dG9uPlxuIiwiPGgyIG1hdC1kaWFsb2ctdGl0bGU+SW5zdGFsbCBBbmd1bGFyPC9oMj5cbjxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICA8aDM+RGV2ZWxvcCBhY3Jvc3MgYWxsIHBsYXRmb3JtczwvaDM+XG4gIDxwPkxlYXJuIG9uZSB3YXkgdG8gYnVpbGQgYXBwbGljYXRpb25zIHdpdGggQW5ndWxhciBhbmQgcmV1c2UgeW91ciBjb2RlIGFuZCBhYmlsaXRpZXMgdG8gYnVpbGRcbiAgICBhcHBzIGZvciBhbnkgZGVwbG95bWVudCB0YXJnZXQuIEZvciB3ZWIsIG1vYmlsZSB3ZWIsIG5hdGl2ZSBtb2JpbGUgYW5kIG5hdGl2ZSBkZXNrdG9wLjwvcD5cblxuICA8aDM+U3BlZWQgJmFtcDsgUGVyZm9ybWFuY2U8L2gzPlxuICA8cD5BY2hpZXZlIHRoZSBtYXhpbXVtIHNwZWVkIHBvc3NpYmxlIG9uIHRoZSBXZWIgUGxhdGZvcm0gdG9kYXksIGFuZCB0YWtlIGl0IGZ1cnRoZXIsIHZpYSBXZWJcbiAgICBXb3JrZXJzIGFuZCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIEFuZ3VsYXIgcHV0cyB5b3UgaW4gY29udHJvbCBvdmVyIHNjYWxhYmlsaXR5LiBNZWV0IGh1Z2VcbiAgICBkYXRhIHJlcXVpcmVtZW50cyBieSBidWlsZGluZyBkYXRhIG1vZGVscyBvbiBSeEpTLCBJbW11dGFibGUuanMgb3IgYW5vdGhlciBwdXNoLW1vZGVsLjwvcD5cblxuICA8aDM+SW5jcmVkaWJsZSB0b29saW5nPC9oMz5cbiAgPHA+QnVpbGQgZmVhdHVyZXMgcXVpY2tseSB3aXRoIHNpbXBsZSwgZGVjbGFyYXRpdmUgdGVtcGxhdGVzLiBFeHRlbmQgdGhlIHRlbXBsYXRlIGxhbmd1YWdlIHdpdGhcbiAgICB5b3VyIG93biBjb21wb25lbnRzIGFuZCB1c2UgYSB3aWRlIGFycmF5IG9mIGV4aXN0aW5nIGNvbXBvbmVudHMuIEdldCBpbW1lZGlhdGUgQW5ndWxhci1zcGVjaWZpY1xuICAgIGhlbHAgYW5kIGZlZWRiYWNrIHdpdGggbmVhcmx5IGV2ZXJ5IElERSBhbmQgZWRpdG9yLiBBbGwgdGhpcyBjb21lcyB0b2dldGhlciBzbyB5b3UgY2FuIGZvY3VzXG4gICAgb24gYnVpbGRpbmcgYW1hemluZyBhcHBzIHJhdGhlciB0aGFuIHRyeWluZyB0byBtYWtlIHRoZSBjb2RlIHdvcmsuPC9wPlxuXG4gIDxoMz5Mb3ZlZCBieSBtaWxsaW9uczwvaDM+XG4gIDxwPkZyb20gcHJvdG90eXBlIHRocm91Z2ggZ2xvYmFsIGRlcGxveW1lbnQsIEFuZ3VsYXIgZGVsaXZlcnMgdGhlIHByb2R1Y3Rpdml0eSBhbmQgc2NhbGFibGVcbiAgICBpbmZyYXN0cnVjdHVyZSB0aGF0IHN1cHBvcnRzIEdvb2dsZSdzIGxhcmdlc3QgYXBwbGljYXRpb25zLjwvcD5cblxuICA8aDM+V2hhdCBpcyBBbmd1bGFyPzwvaDM+XG5cbiAgPHA+QW5ndWxhciBpcyBhIHBsYXRmb3JtIHRoYXQgbWFrZXMgaXQgZWFzeSB0byBidWlsZCBhcHBsaWNhdGlvbnMgd2l0aCB0aGUgd2ViLiBBbmd1bGFyXG4gICAgY29tYmluZXMgZGVjbGFyYXRpdmUgdGVtcGxhdGVzLCBkZXBlbmRlbmN5IGluamVjdGlvbiwgZW5kIHRvIGVuZCB0b29saW5nLCBhbmQgaW50ZWdyYXRlZFxuICAgIGJlc3QgcHJhY3RpY2VzIHRvIHNvbHZlIGRldmVsb3BtZW50IGNoYWxsZW5nZXMuIEFuZ3VsYXIgZW1wb3dlcnMgZGV2ZWxvcGVycyB0byBidWlsZFxuICAgIGFwcGxpY2F0aW9ucyB0aGF0IGxpdmUgb24gdGhlIHdlYiwgbW9iaWxlLCBvciB0aGUgZGVza3RvcDwvcD5cblxuICA8aDM+QXJjaGl0ZWN0dXJlIG92ZXJ2aWV3PC9oMz5cblxuICA8cD5Bbmd1bGFyIGlzIGEgcGxhdGZvcm0gYW5kIGZyYW1ld29yayBmb3IgYnVpbGRpbmcgY2xpZW50IGFwcGxpY2F0aW9ucyBpbiBIVE1MIGFuZCBUeXBlU2NyaXB0LlxuICBBbmd1bGFyIGlzIGl0c2VsZiB3cml0dGVuIGluIFR5cGVTY3JpcHQuIEl0IGltcGxlbWVudHMgY29yZSBhbmQgb3B0aW9uYWwgZnVuY3Rpb25hbGl0eSBhcyBhXG4gIHNldCBvZiBUeXBlU2NyaXB0IGxpYnJhcmllcyB0aGF0IHlvdSBpbXBvcnQgaW50byB5b3VyIGFwcHMuPC9wPlxuXG4gIDxwPlRoZSBiYXNpYyBidWlsZGluZyBibG9ja3Mgb2YgYW4gQW5ndWxhciBhcHBsaWNhdGlvbiBhcmUgTmdNb2R1bGVzLCB3aGljaCBwcm92aWRlIGEgY29tcGlsYXRpb25cbiAgY29udGV4dCBmb3IgY29tcG9uZW50cy4gTmdNb2R1bGVzIGNvbGxlY3QgcmVsYXRlZCBjb2RlIGludG8gZnVuY3Rpb25hbCBzZXRzOyBhbiBBbmd1bGFyIGFwcCBpc1xuICBkZWZpbmVkIGJ5IGEgc2V0IG9mIE5nTW9kdWxlcy4gQW4gYXBwIGFsd2F5cyBoYXMgYXQgbGVhc3QgYSByb290IG1vZHVsZSB0aGF0IGVuYWJsZXNcbiAgYm9vdHN0cmFwcGluZywgYW5kIHR5cGljYWxseSBoYXMgbWFueSBtb3JlIGZlYXR1cmUgbW9kdWxlcy48L3A+XG5cbiAgPHA+Q29tcG9uZW50cyBkZWZpbmUgdmlld3MsIHdoaWNoIGFyZSBzZXRzIG9mIHNjcmVlbiBlbGVtZW50cyB0aGF0IEFuZ3VsYXIgY2FuIGNob29zZSBhbW9uZyBhbmRcbiAgbW9kaWZ5IGFjY29yZGluZyB0byB5b3VyIHByb2dyYW0gbG9naWMgYW5kIGRhdGEuIEV2ZXJ5IGFwcCBoYXMgYXQgbGVhc3QgYSByb290IGNvbXBvbmVudC48L3A+XG5cbiAgPHA+Q29tcG9uZW50cyB1c2Ugc2VydmljZXMsIHdoaWNoIHByb3ZpZGUgc3BlY2lmaWMgZnVuY3Rpb25hbGl0eSBub3QgZGlyZWN0bHkgcmVsYXRlZCB0byB2aWV3cy5cbiAgU2VydmljZSBwcm92aWRlcnMgY2FuIGJlIGluamVjdGVkIGludG8gY29tcG9uZW50cyBhcyBkZXBlbmRlbmNpZXMsIG1ha2luZyB5b3VyIGNvZGUgbW9kdWxhcixcbiAgcmV1c2FibGUsIGFuZCBlZmZpY2llbnQuPC9wPlxuXG4gIDxwPkJvdGggY29tcG9uZW50cyBhbmQgc2VydmljZXMgYXJlIHNpbXBseSBjbGFzc2VzLCB3aXRoIGRlY29yYXRvcnMgdGhhdCBtYXJrIHRoZWlyIHR5cGUgYW5kXG4gIHByb3ZpZGUgbWV0YWRhdGEgdGhhdCB0ZWxscyBBbmd1bGFyIGhvdyB0byB1c2UgdGhlbS48L3A+XG5cbiAgPHA+VGhlIG1ldGFkYXRhIGZvciBhIGNvbXBvbmVudCBjbGFzcyBhc3NvY2lhdGVzIGl0IHdpdGggYSB0ZW1wbGF0ZSB0aGF0IGRlZmluZXMgYSB2aWV3LiBBXG4gIHRlbXBsYXRlIGNvbWJpbmVzIG9yZGluYXJ5IEhUTUwgd2l0aCBBbmd1bGFyIGRpcmVjdGl2ZXMgYW5kIGJpbmRpbmcgbWFya3VwIHRoYXQgYWxsb3cgQW5ndWxhclxuICB0byBtb2RpZnkgdGhlIEhUTUwgYmVmb3JlIHJlbmRlcmluZyBpdCBmb3IgZGlzcGxheS48L3A+XG5cbiAgPHA+VGhlIG1ldGFkYXRhIGZvciBhIHNlcnZpY2UgY2xhc3MgcHJvdmlkZXMgdGhlIGluZm9ybWF0aW9uIEFuZ3VsYXIgbmVlZHMgdG8gbWFrZSBpdCBhdmFpbGFibGVcbiAgdG8gY29tcG9uZW50cyB0aHJvdWdoIERlcGVuZGVuY3kgSW5qZWN0aW9uIChESSkuPC9wPlxuXG4gIDxwPkFuIGFwcCdzIGNvbXBvbmVudHMgdHlwaWNhbGx5IGRlZmluZSBtYW55IHZpZXdzLCBhcnJhbmdlZCBoaWVyYXJjaGljYWxseS4gQW5ndWxhciBwcm92aWRlc1xuICB0aGUgUm91dGVyIHNlcnZpY2UgdG8gaGVscCB5b3UgZGVmaW5lIG5hdmlnYXRpb24gcGF0aHMgYW1vbmcgdmlld3MuIFRoZSByb3V0ZXIgcHJvdmlkZXNcbiAgc29waGlzdGljYXRlZCBpbi1icm93c2VyIG5hdmlnYXRpb25hbCBjYXBhYmlsaXRpZXMuPC9wPlxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG48bWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPkNhbmNlbDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwidHJ1ZVwiIGNka0ZvY3VzSW5pdGlhbD5JbnN0YWxsPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cbiJdfQ==