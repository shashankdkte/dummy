import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrl: './navigation-link.component.css'
})
export class NavigationLinkComponent {
  @Input() routerLink: string = ' ';
  @Input() label: string = ' ';
  @Input() isActive: boolean = false;
  @Input() icon: string | undefined= 'far fa-circle nav-icon';
}
