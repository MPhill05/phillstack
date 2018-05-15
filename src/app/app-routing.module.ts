import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { GrantComponent } from './grant/grant.component';
import { MarkComponent } from './mark/mark.component';
import { ProjectsComponent } from './projects/projects.component';
import { IndexComponent } from './index/index.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },
    { path: 'nav', component: NavComponent },
    { path: 'grant', component: GrantComponent },
    { path: 'mark', component: MarkComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '', component: IndexComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
