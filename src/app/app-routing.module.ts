import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrantComponent } from './grant/grant.component';
import { MarkComponent } from './mark/mark.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'grant', component: GrantComponent },
    { path: 'mark', component: MarkComponent },
    { path: '', component: IndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
