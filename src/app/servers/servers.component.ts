import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //allowNewServer:boolean = false;
  allowNewServer = false;
  ServerCreationStatus = 'No server was created!';
  serverName = 'Hello';

  constructor() {
    setTimeout(() => {this.allowNewServer=true;
    },4000);
   }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.ServerCreationStatus = 'server was created! with Name '+this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
