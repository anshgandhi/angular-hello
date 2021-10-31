import { Component } from "@angular/core";

@Component({
    selector: "app-server", // this selector needs to be unique so as to not overwrite a selector.
    templateUrl: "./server.component.html", // need relative path
    styles: [`
        .online {
            color: white;
        }
        .offline {
            color: gray;
        }
    `]
})
export class ServerComponent {
    serverId: number= 10;
    serverStatus: string = "offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus() {
        return this.serverStatus
    }

    getColor(){
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}
