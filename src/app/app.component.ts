import { Component } from '@angular/core';
import { PostserviceService } from './postservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostserviceService]
})
export class AppComponent {
  title: string;

// tslint:disable-next-line: variable-name
  constructor( private _service: PostserviceService) {

  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.title = this._service.display();
  }
}
