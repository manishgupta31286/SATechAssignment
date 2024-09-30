import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(SocialAuthService);
  const router = inject(Router);

  return authService.authState.pipe(
    map((socialUser: SocialUser) => !!socialUser),
    tap((isLoggedIn: boolean) => {
      if (!isLoggedIn) {
        sessionStorage.setItem('redirectUrl', router.url);
        router.navigate(['login']);
      }
    })
  );

  // return authService.signedIn$.pipe(
  //   tap((isLoggedIn: boolean) => {
  //     if (!isLoggedIn) {
  //       router.navigate(['/login']); // Redirect to login if not authenticated
  //     }
  //   })
  // );
};
