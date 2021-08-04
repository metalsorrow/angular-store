import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        // loadChildren: './home/home.module/#HomeModule',
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.modules').then(m => m.ProductsModules),
      },
      // {
      //   path: 'products/:id',
      //   component: ProductDetailComponent
      // },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        component: ContactComponent,
      },
      {
        path: 'demo',
        component: DemoComponent
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {preloadingStrategy: PreloadAllModules}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
