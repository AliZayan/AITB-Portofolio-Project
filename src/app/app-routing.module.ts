import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialsComponent } from './socials/socials.component';

const routes: Routes = [
  {path: 'skills', component : SkillsComponent},
  {path:'social', component : SocialsComponent},
  {path:'about', component : AboutmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
