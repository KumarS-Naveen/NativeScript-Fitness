import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallengeEditComponent } from "./challenge-edit.component";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: ChallengeEditComponent },
        ]),
        SharedModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengeEditModule {}
