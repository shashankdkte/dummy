import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() bgClass: string = '';
    @Input() customStyles: any = {};
    @Input() value: string = '';
    @Input() unit: string | null = null;
    @Input() description: string = '';
    @Input() icon: string = 'ion ion-stats-bars';
  @Input() footerText: string = 'More info';
  @Input() id: string = '1';
  @Input() bgFooter: string | null = null;
  @Input() linear: string | null = null;
  @Input() footerBg: string | null = null;
  @Input() fontColor: string | null = null;
  
  
}
