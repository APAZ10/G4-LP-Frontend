import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bosque } from 'app/interfaces/bosques';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BosquesService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Bosque[]> {
    return this.http.get<Bosque[]>(`${environment.datababe_url}/bosques`);
  }

  get(id: string): Observable<Bosque> {
    return this.http.get<Bosque>(`${environment.datababe_url}/bosques/${id}`);
  }


  add(bosque: Bosque): Observable<Bosque> {
    return this.http.post<Bosque>(`${environment.datababe_url}/bosques`, bosque);
  }

  like(id: string): Observable<Bosque> {
    return this.http.get<Bosque>(`${environment.datababe_url}/like/${id}`);
  }

  addLike(id: string,cantidad: number): Observable<any>{
    return this.http.patch(`${environment.datababe_url}/like/${id}`,{"cantidad":cantidad})
  }

  /*delete(id: string): Observable<Bosque> {
    return this.http.delete<Bosque>(`${environment.datababe_url}/bosques/${id}`);
  }


  update(bosque: Bosque) {
    return this.http.patch(`${environment.datababe_url}/bosques/${bosque.id}`, bosque);
  }*/

}
