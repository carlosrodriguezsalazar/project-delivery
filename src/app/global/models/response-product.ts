import Product from './product';
import {Content} from './content';

export class ResponseProduct {
  cod: string;
  message: string;
  totalItems: number;
  totalPages: number;
  items: Content;
}
