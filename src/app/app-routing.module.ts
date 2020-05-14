import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: 'public', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)},
 ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }