import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef,
    ViewContainerRef,
} from "@angular/core";
import { UiService } from "./shared/ui/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;

    activeChallenges: string[] = [];
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;
    constructor(
        private uiService: UiService,
        private changeDetectionRef: ChangeDetectorRef,
        private vcRef: ViewContainerRef
    ) {}

    ngOnInit() {
        this.drawerSub = this.uiService.drawerstate.subscribe(() => {
            if (this.drawer) {
                this.drawer.toggleDrawerState();
            }
        });
        this.uiService.setRootVCRef(this.vcRef);
    }

    ngOnDestroy() {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;

        this.changeDetectionRef.detectChanges();
    }

    onChallengeInout(challengeDes: string) {
        this.activeChallenges.push(challengeDes);
    }

    onLogout() {
        this.uiService.toggleDrawer();
    }
}
