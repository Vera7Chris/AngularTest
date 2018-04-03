import { enableProdMode } from '@angular/core';
//关闭angular开发者模式的方法
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//告诉angular使用哪个模块来启动应用
import { AppModule } from './app/app.module';
//主模块
import { environment } from './environments/environment';
//环境打包配置
if (environment.production) {
  enableProdMode();
}
//如果是生产环境，关闭开发者模式

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
//调用bootstrapModule 传入主模块 开启应用
//首先加载AppModule，分析后加载它需要的模块，然后加载这些模块需要的模块，类推
//加载完所有依赖后，在index.html中寻找启动模块制定的主组件，对应的selector，然后把模板中的url代替这个selector
