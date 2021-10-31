import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', select elements with 'attribute' as app-servers
  // selector: '.app-servers', select elements with 'class' as app-servers
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = "TestServer";
  serverCreated = false;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event_passed: Event){
    this.serverName = (<HTMLInputElement>event_passed.target).value; // type casting
  }

}
