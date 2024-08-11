import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { ProductActivity } from '../domain/productActivity';


@Injectable({
  providedIn: 'root'
})
export class ProductActivityService {
  private apiUrlBase = 'http://localhost:8080/private';

  constructor(private http:HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlBase + '/listaProductoActividad'}`);
  }

   crear(objeto:ProductActivity){
     return this.http.post(`${this.apiUrlBase + '/guardarProductoActividad'}`, objeto);
  }

// /private/guardarListaProductoActividad
  crearLista(listObjeto:ProductActivity[]){
    return this.http.post(`${this.apiUrlBase + '/guardarListaProductoActividad'}`, listObjeto);
  }

  editar(id: number, objeto:ProductActivity): Observable<any>{
    return this.http.put(`${this.apiUrlBase + '/updateProductoActividad/' + id}`, objeto);
  }

  eliminar(id:number){
    return this.http.delete(`${this.apiUrlBase + '/eliminarProductoActividad/' + id}`);
  }

  // obtener(id:number){
  //   return this.http.get<ProductoActividad>(`${this.apiUrl}/${id}`);
  // }
  //

}
