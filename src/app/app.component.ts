import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
            <b style="font-size:30px;">{{title}}</b>
            <div>
             <pm-products></pm-products>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Management';
}
