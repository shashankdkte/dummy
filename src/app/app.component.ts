import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adminlte_app_02';
  numbers = Array(10).fill(0).map((x, i) => i);
  cards = [
    { id:'1' ,bgClass: 'bg-warning', value: '44', description: 'User Registrations', icon: 'ion ion-person-add', footerText: 'More info' },
    { id: '2', bgClass: 'bg-light-green', value: '53', description: 'Accounting', icon: 'ion ion-calculator', footerText: 'More info', outline: '2px solid #78cdd2', fontColor: '#78cdd2' },
    { id:'5' ,bgClass: 'bg-primary', value: '75', description: 'Meetings', icon: 'ion ion-chatbubbles', footerText: 'More info' },
    
    
    { id:'4' ,bgClass: 'bg-light-pink', value: '15', description: 'Quaterlys', icon: 'ion ion-pie-graph', footerText: 'More info',outline:'2px solid #f39ee6',fontColor:'#f39ee6' },
    {
      id: '7', bgClass: 'bg-light-orange', value: '45', description: 'Timesheet', icon: 'ion ion-clock', footerText: 'More info', outline: "2px solid #f9c47d",
      fontColor: '#f9c47d'
    },
    { id:'3' ,bgClass: 'bg-info', value: '150', description: 'Newly Launched', icon: 'ion ion-speakerphone', footerText: 'More info',unit:"%" },
    {
      id: '8', bgClass: 'bg-light-blue', value: '95', description: 'Projects', icon: 'ion ion-code-working', footerText: 'More info', outline: "2px solid #88a6fd",
      fontColor:'#88a6fd'
    },
    { id:'6' ,bgClass: 'bg-secondary', value: '115', description: 'Emails', icon: 'ion ion-email-unread', footerText: 'More info' }
    

  ];
}
