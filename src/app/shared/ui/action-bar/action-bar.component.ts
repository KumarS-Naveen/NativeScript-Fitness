import { Component, OnInit, Input } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { isAndroid } from "platform";
import { RouterExtensions } from "@nativescript/angular";
import { UiService } from "../ui.service";
import { Router } from "@angular/router";

declare var android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"],
})
export class ActionBarComponent implements OnInit {
    @Input() title = "";
    @Input() showBackButton = true;
    @Input() hasMenu = true;

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private uiService: UiService,
        private routers: Router
    ) {
        // this.routers.routeReuseStrategy.shouldReuseRoute = function () {
        //     return false;
        // };
    }

    get canGoBack() {
        return this.router.canGoBack() && this.showBackButton;
    }

    get android() {
        return isAndroid;
    }

    onGoBack() {
        // this.router.backToPreviousPage();
        const navigationOptions: any = {
            clearHistory: true,
            animated: false,
            skipLocationChange: true,
        };

        return this.router.back();
        //.navigate([""], navigationOptions);
    }
    onLoadActionbar() {
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView;
            const backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor("#171717"),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
    }

    onToggleMenu() {
        this.uiService.toggleDrawer();
    }

    ngOnInit() {}
}
