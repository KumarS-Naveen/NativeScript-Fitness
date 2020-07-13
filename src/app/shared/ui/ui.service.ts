import { Injectable, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UiService {
    private _drawerState = new BehaviorSubject<boolean>(false);
    private _rooteVCRef: ViewContainerRef;

    get drawerstate() {
        return this._drawerState.asObservable();
    }

    toggleDrawer() {
        this._drawerState.next(true);
    }

    setRootVCRef(vcRef: ViewContainerRef) {
        this._rooteVCRef = vcRef;
    }

    getRootVCRef() {
        return this._rooteVCRef;
    }
}
