import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { ModelsModule } from './models/models.module';
import { HomeComponent } from './home/home.component';
import { ServicesModule } from './services/services.module';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { LoginComponent } from './login/login.component';
import { GoogleSigninButtonModule, SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig, GoogleInitOptions } from '@abacritt/angularx-social-login';
// import { MyAuthService } from './services/MyAuthService';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    HomeComponent,
    CartsummaryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelsModule,
    ServicesModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('371816884632-oigr51181fbcs7cmi5t3n58a5sev2nru.apps.googleusercontent.com',
              { scopes: ['email', 'openid', 'profile'] })
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
