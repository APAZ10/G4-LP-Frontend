import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class EspeciesService {

    constructor(
      private http: HttpClient
    ) { }
  
    list(): Observable<any[]> {
      return this.http.get<any[]>(`${environment.datababe_url}/grupo`);
    }
  }