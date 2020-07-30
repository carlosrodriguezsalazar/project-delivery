import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export class Constants {

  public static IMAGE_NOT_DISP = 'nodisp.png';
  public static PHOTO_CUSTOMER = 'PHOTO_CUSTOMER';
  public static PHOTO_ITEM = 'PHOTO_ITEM';
  public static CUST_TYPE = 'custType';
  public static ITEM_TYPE = 'itemType';
  public static DEFAULT_ITEM_IMAGE = '../../assets/default-images/nodispItem.png';
  public static DEFAULT_CUSTOMER_IMAGE = '../../assets/default-images/nodispCustomer.png';
  public static COD_RES_OK = 201;
  public static COD_HTTP_OK = 302;

  public static CASH_TYPE = 'cash';
  public static POST_TYPE = 'post';
  public static EBANK_TYPE = 'eBank';
  public static CHECK_TYPE = 'check';
  public static CUSTOMER_CREDIT = 'customerCreditId';
  public static TYPE_INVOICE_REFUND = 'R';
  public static TYPE_INVOICE_INVOICE = 'I';

  public static HTTP_HEADERS = new HttpHeaders({
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  });

  public static URL_ENDPOINT = environment.urlApiMain;
  public static COD_USD = 2;
}
