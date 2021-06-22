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
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  showPassword = false;
  log = [];

  constructor() {
    setTimeout(() => {this.allowNewServer=true;
    },4000);
   }

  checksEmptyUserName():boolean
  {
    return this.userName === '' ? true : false;
  }

  // onResetUSer()
  // {
  //   this.userName ='';
  // }
  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.ServerCreationStatus = 'server was created! with Name '+this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  onToggleDisplay()
  {
    this.showPassword = ! this.showPassword;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }
}
