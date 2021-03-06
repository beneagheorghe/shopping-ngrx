import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";

import { ShoppingReducer } from "./store/reducers/shopping.reducer";

import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { ShoppingEffects } from "./store/effects/shopping.effect";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer,
    }),
    EffectsModule.forRoot([ShoppingEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
