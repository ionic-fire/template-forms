import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-forms';
  output = ''

  submit(form) {
    this.output = this.formatData(form.value)
  }

  formatData(values) {
    let toReturn = ''
    let keys = Object.keys(values)
    for (let key of keys) {
      toReturn += key + ': ' + values[key] + '\n'
    }

    return toReturn
  }
}
