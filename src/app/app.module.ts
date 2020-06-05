import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { CollapseItemComponent } from './component/collapse-item/collapse-item.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { MenuItemComponent } from './component/menu-item/menu-item.component';
import { MenuComponent } from './component/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CollapseItemComponent,
    ProductListComponent,
    MenuItemComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
