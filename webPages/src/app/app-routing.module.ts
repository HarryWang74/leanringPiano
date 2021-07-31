import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
const routes: Routes = [
  { path: 'timeline', component: TimelineComponent},
  { path: 'keyboard', component: KeyboardComponent},
  { path: '',
      redirectTo: '/keyboard',
      pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
