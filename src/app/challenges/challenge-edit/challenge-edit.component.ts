import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageRoute } from "@nativescript/angular";

@Component({
    selector: "ns-challenge-edit",
    templateUrl: "./challenge-edit.component.html",
    styleUrls: ["./challenge-edit.component.css"],
})
export class ChallengeEditComponent implements OnInit {
    isCreating = true;
    constructor(
        private activateRoute: ActivatedRoute,
        private pageRoute: PageRoute
    ) {}
    ngOnInit(): void {
        // This code runs only ones and for second time it loads from cache, hence for a different page when we are routing using params this might not work
        // this.activateRoute.paramMap.subscribe((paramMap) => {
        //     console.log(paramMap.get("mode"));
        // });
        // Triggers everytime a user traverse from a different page to this page using params hence each time it gets correct params
        this.pageRoute.activatedRoute.subscribe((activatedRoute) => {
            activatedRoute.paramMap.subscribe((paramMap) => {
                if (paramMap.get("mode")) {
                    this.isCreating = true;
                } else {
                    this.isCreating = paramMap.get("mode") !== "edit";
                }
            });
        });
    }
}
