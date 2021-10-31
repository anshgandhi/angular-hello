import { Component } from "@angular/core";

@Component({
    selector: "app-server", // this selector needs to be unique so as to not overwrite a selector.
    templateUrl: "./server.component.html" // need relative path
})
export class ServerComponent {
    serverId: number= 10;
    serverStatus: string = "offline";

    getServerStatus() {
        return this.serverStatus
    }
}
