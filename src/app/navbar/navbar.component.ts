import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html'  
})

export class NavbarComponent{

	public constructor(private authService: AuthService, private router: Router){}

	public signOutUser(){
		this.authService.signOut()
			.subscribe(
				() => this.router.navigate(['/sign-in'])
			)
	}
	
}