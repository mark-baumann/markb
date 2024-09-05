import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isDarkMode: boolean = true; 

  constructor() {
    this.applyInitialTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  applyInitialTheme() {
    // Wende die Dark Theme Klasse standardmäßig an
    document.body.classList.add('dark-theme');
  }


}
