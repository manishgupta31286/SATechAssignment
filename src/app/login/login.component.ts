import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../services/MyAuthService';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user: SocialUser | undefined;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService,
    private router: Router
  ) { }
  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
      this.loggedIn = (user != null);
      const redirectUrl = sessionStorage.getItem('redirectUrl') || '/';
      this.router.navigateByUrl(redirectUrl);
    });
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then(accessToken => {
        console.log(accessToken);
      })
      .catch(error => console.log(error));
  }
  // signIn(): void {
  //   console.log('signing in');
  //   this.auth.signInWithGoogle().subscribe(googleUser => {
  //     console.log(googleUser);
  //     // console.log(profile.getEmail());
  //     // console.log(profile.getName());
  //   });
  // }
}
