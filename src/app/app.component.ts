import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyAngular';
  imageURL = '../assets/BL_logo_square_png.png';
  url = 'https://www.bridgelabz.com/';
  userName: string = "";
  nameError = "";

  ngOnInit(): void {
    console.log('Hello from ngOnInit');
    this.title = 'Hello from BridgeLabz.';
  }

  onClick($event: MouseEvent) {
    console.log('Button was clicked!', $event);
    window.open(this.url, '_blank');
  }

  onInput($event: Event) {
    console.log('Input event fired! Changes have been made by User.', $event);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}
