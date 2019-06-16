import { Component, OnInit } from '@angular/core';
import Contact from "../model/Contact";
import {ContactHttpService} from "../service/contact-http.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(private contactHttpService: ContactHttpService) {
  }

  getContacts(){
    return this.contactHttpService.getContactsObservable()
      .subscribe(data => this.contacts = data);
  }

  ngOnInit() {
    this.getContacts();
  }

}
