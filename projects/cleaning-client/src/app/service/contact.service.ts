import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ContactModel } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private targetUrl = environment.baseUrl + '/api/clean/contact';
  
  constructor(private http: HttpClient) { }

  PostContact(model: ContactModel){
    return this.http.post(`${this.targetUrl}`, model);
  }
}
