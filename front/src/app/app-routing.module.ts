import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//rotas de sala
import { SalaAddComponent } from './sala/sala-add/sala-add.component';
import { SalaEditComponent } from './sala/sala-edit/sala-edit.component';
import { SalaGetComponent } from './sala/sala-get/sala-get.component';


const routes: Routes = [

  //usando rotas da sala
 { path: 'sala/create', component: SalaAddComponent },
 {  path: 'sala/:id', component: SalaEditComponent  },
 {  path: 'sala', component: SalaGetComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
