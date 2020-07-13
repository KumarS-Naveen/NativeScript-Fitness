import { NgModule } from "@angular/core";

import { ActionBarComponent } from "../shared/ui/action-bar/action-bar.component";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";

@NgModule({
    declarations: [ActionBarComponent],
    exports: [ActionBarComponent],
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
})
export class SharedModule {}
