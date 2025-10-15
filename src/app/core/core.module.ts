import { HttpClientModule } from "@angular/common/http";
import { LocalStorageService } from "./services/local-storage/local-storage-service";
import { ThemeService } from "./services/theme/theme-service";
import { NgModule, Optional, SkipSelf } from "@angular/core";

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    LocalStorageService,
    ThemeService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class CoreModule {
  
 constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule já foi carregado. Importe-o apenas no AppModule.'
      );
    }
  }
}