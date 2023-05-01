import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {

  guidToString(guid:Guid):string{
    return guid.toString();
  }
}
