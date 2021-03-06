import { NgModule, Component } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
    { path: "", component: AuthComponent },
    {
        path: "challenges",
        loadChildren: "./challenges/challenges.module#ChallengesModule",
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
