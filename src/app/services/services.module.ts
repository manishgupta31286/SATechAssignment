import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsModule } from '../models/models.module';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModelsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('371816884632-oigr51181fbcs7cmi5t3n58a5sev2nru.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    },
  ]
})
export class ServicesModule { }
