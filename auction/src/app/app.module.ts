import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';


@NgModule({
  declarations: [
    //包含的内容
    //只能声明组件指令管道
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    AppComponent
  ],
  imports: [
    //需要依赖的其他模块
    //FormsModule,HttpModule
    BrowserModule
  ],
  //模块中提供的服务
  providers: [],
  bootstrap: [AppComponent]  //模块的主组件
})
//声明完了这是个模块，以及一些内容；对外叫做：AppModule
export class AppModule { }
