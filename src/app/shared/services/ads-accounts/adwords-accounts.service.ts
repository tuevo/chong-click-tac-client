import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from '../../constants/api.constant';
@Injectable({
  providedIn: 'root'
})
export class AdwordsAccountsService {

 

  constructor(private _http: HttpClient) { }

  public getAdwordsAccount(): Observable<any> {
    return this._http.get(API.AdwordsAccount.getAccounts);
  }

  public getAccountAdwordsDetail(accountId: string): Observable<any> {
    const url = API.AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
    return this._http.get(url);
  } 
}
