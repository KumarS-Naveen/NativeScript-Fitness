import { Component, Input, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "@nativescript/angular/modal-dialog";
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UiService } from "../../shared/ui/ui.service";

@Component({
    selector: "ns-current-challenge",
    templateUrl: "./current-challenges.component.html",
    styleUrls: ["./current-challenges.component.css"],
})
export class CurrentChallengeComponent {
    constructor(
        private modalDialog: ModalDialogService,
        private vcRef: ViewContainerRef,
        private uiService: UiService
    ) {}
    onChangeStatus() {
        this.modalDialog
            .showModal(DayModalComponent, {
                fullscreen: true,
                viewContainerRef: this.uiService.getRootVCRef()
                    ? this.uiService.getRootVCRef()
                    : this.vcRef,
                context: { date: new Date() },
            })
            .then((action: string) => {
                console.log(action);
            });
    }
}
