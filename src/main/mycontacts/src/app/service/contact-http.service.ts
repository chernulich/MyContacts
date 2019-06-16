import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Contact from "../model/Contact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getContactsObservable(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>("api/contacts");
  }
}
