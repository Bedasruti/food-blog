import { Injectable } from '@angular/core';

@Injectable()
export class ViewitemService {
  getReceipe(){
    return[
      {"id":"1","title":"briyani","ingredients":"1.Rice 2.Motton","method":"Boil the Rice 3/4"},
      {"id":"2","title":"Mixed Noodles","ingredients":"1.Rice 2.Chicken","method":"Boil the Noodles 3/4"},
      {"id":"3","title":"Mixed Pasta","ingredients":"1.Pasta 2.Chicken","method":"Boil the Pasta 3/4"}
    ];
  }
  constructor() { }
}
