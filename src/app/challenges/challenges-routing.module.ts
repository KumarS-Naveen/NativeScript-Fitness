import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { TodayComponent } from "../challenges/today/today.component";
import { CurrentChallengeComponent } from "../challenges/current-challenges/current-challenges.component";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "tabs",
        component: ChallengeTabsComponent,
        children: [
            {
                path: "current-challenge",
                component: CurrentChallengeComponent,
                outlet: "currentChallenge",
            },
            {
                path: "today",
                component: TodayComponent,
                outlet: "today",
            },
        ],
    },
    {
        path: ":mode",
        loadChildren:
            "./challenge-edit/challenge-edit.module#ChallengeEditModule",
    },
    { path: "", redirectTo: "/challenges/tabs", pathMatch: "full" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class ChallengesRoutingmodule {}
