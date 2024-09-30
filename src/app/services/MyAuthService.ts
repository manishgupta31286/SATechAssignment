import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MyAuthService {
	private user: SocialUser | null = null;
	private signedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

	constructor(private socialAuthService: SocialAuthService) { }

	get signedIn$(): Observable<boolean> {
		return this.signedInSubject.asObservable();
	}

	get accessToken$(): Observable<string | null> {
		return this.accessTokenSubject.asObservable();
	}

	signInWithGoogle(): Observable<SocialUser> {
		return new Observable<SocialUser>((observer) => {
			this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
				.then((user) => {
					this.user = user;
					observer.next(user);
					this.signedInSubject.next(true);
					this.accessTokenSubject.next(user.idToken); // Store the idToken (access token) in BehaviorSubject
					observer.complete();
				})
				.catch((error) => {
					observer.error(error);
				});
		});
	}

	signOut(): Observable<void> {
		return new Observable<void>((observer) => {
			this.socialAuthService.signOut()
				.then(() => {
					this.user = null;
					this.signedInSubject.next(false);
					this.accessTokenSubject.next(null); // Clear access token on sign out
					observer.next();
					observer.complete();
				})
				.catch((error) => {
					observer.error(error);
				});
		});
	}

	getCurrentUser(): SocialUser | null {
		return this.user;
	}
}
