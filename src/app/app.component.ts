import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
  Hello {{title}}
`
})
export class AppComponent {
  title = 'World';
}
