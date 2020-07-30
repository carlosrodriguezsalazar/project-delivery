import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ResponseProduct} from './global/models/response-product';
import {Constants} from './global/constants/constants.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'https://spring-boot-backend-api-rest.herokuapp.com';
  private httpHeaders = new HttpHeaders({
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  });

  private urlEndpoint = 'http://localhost:8080/api/';
  private methodUrlGetItemsAll = 'items/get/item-all';
  private methodUrlGetItemById = 'items/get/item-id/';
  private methodUrlCreateItem = 'items/post';
  private methodUrlPutItem = 'items/put';
  private methodUrlChangeStatus = 'items/change/status';
  private methodUrlGetItemByIds = 'items/get/items-ids';
  private methodUrlGetItemsByPagination = 'items/get/item-pagination';

  constructor(private http: HttpClient) {
  }

  getItemsByPagination(pageNumber: string, sizeTotal: string): Observable<ResponseProduct> {
    const formData = new FormData();
    formData.append('page', pageNumber);
    formData.append('size', sizeTotal);

    return this.http.post(Constants.URL_ENDPOINT + this.methodUrlGetItemsByPagination, formData, {headers: Constants.HTTP_HEADERS}).pipe(
      map(response => {
        return response as ResponseProduct;
      })
    );
  }
}
