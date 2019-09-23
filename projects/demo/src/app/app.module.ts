import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PerimeterModule } from 'ngx-perimeter';
import { AppComponent } from './app.component';
import { LoadableModule } from 'ngx-loadable';
import { InViewportDirective } from '@ngx-starter-kit/ngx-utils';
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SpinnerComponent,
    InViewportDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PerimeterModule,
    LoadableModule.forRoot({
      moduleConfigs: [{
        name: 'lazy',
        load: () => import('./lazy/lazy.module').then(mod => mod.LazyModule),
      }, {
        name: 'bottom',
        load: () => import('./bottom/bottom.module').then(mod => mod.BottomModule),
      }, {
        name: 'app-breach',
        load: () => import('./breach/breach.module').then(mod => mod.BreachModule),
        isElement: true,
        loadingComponent: SpinnerComponent
      }],
      rootOptions: {
        loadingComponent: LoaderComponent,
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

