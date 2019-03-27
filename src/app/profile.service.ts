import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid='';
  private clientsecret= '';
  constructor(private http:Http) { }
}
