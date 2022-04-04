import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';
import { MenuComponent } from './components/menu/menu.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path:'form',
    component: FormComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
