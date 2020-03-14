import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  /**
   * Hello message
   */
  title = 'Hello utility service';

  /**
   * Sum two number
   * @param a addend one
   * @param b addend two
   */
  add(a: number, b: number) {
    return a + b;
  }

}
