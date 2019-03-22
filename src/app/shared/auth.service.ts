import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';

import { User } from './user.model';

@Injectable()

export class AuthService{
  public constructor(private tokenService: Angular2TokenService){}

  public signUp(user: User){

  }

  public signIn(uid: string, password: string){

  }

  public signOut(){

  }

  public isSignedIn(){

  }

  private handleErrors(error: Response){
    console.log('Salvando erro no log - Detalhes do erro => ', error);
    console.log(Observable.throw(error));
  }
}