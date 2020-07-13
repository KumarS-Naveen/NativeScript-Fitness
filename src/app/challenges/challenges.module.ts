import { NativeScriptCommonModule } from "@nativescript/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallengesRoutingmodule } from "./challenges-routing.module";
import { CurrentChallengeComponent } from "./current-challenges/current-challenges.component";
import { TodayComponent } from "./today/today.component";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        CurrentChallengeComponent,
        TodayComponent,
        ChallengeTabsComponent,
    ],
    imports: [NativeScriptCommonModule, ChallengesRoutingmodule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengesModule {}
