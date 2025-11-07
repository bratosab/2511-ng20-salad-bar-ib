import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { saladRoutes } from "./salad/salad.routes";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from "./store/app.reducer";

export const config: ApplicationConfig = {
    providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter([...routes, ...saladRoutes]),
    provideStore({
      app: appReducer,
      router: routerReducer
    }),
    provideEffects(),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
}