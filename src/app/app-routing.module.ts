import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PjtsComponent } from './pjts/pjts.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'project',component:PjtsComponent},
{path:'service',component:SkillsComponent},
{path:'contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
