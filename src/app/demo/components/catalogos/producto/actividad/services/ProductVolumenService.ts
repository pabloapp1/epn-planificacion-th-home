import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductVolumenService {
  private apiUrlBase = 'http://localhost:8080/private';

  constructor(private http:HttpClient) { }

  getProductsVolumen() {
    return Promise.resolve(this.getProductsVolumenData());
  }

  getProductsVolumenData() {
    return [
      {
        idProductoVolumen: 1,
        nombreProductoVolumen: 'un volumen producto volmen 1'
      },
      {
        idProductoVolumen: 2,
        nombreProductoVolumen: 'volumen 2'
      }
    ]
  }

  // listarPorIdVolumen(id:number){
  //   return this.http.get<any[]>(`${this.apiUrlBase + '/buscarProductoActividadPorIdProductoVolumen/' + id}`);
  // }


}


