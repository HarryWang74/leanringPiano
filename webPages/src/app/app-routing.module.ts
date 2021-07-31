import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { Week02aComponent } from './week02/week02a/week02a.component';
const routes: Routes = [
  { path: 'timeline', component: TimelineComponent},
  { path: 'keyboard', component: KeyboardComponent},
  { path: '',
      redirectTo: '/keyboard',
      pathMatch: 'full'
  },
  // weeks
  { path: 'week02a', component: Week02aComponent }, // 强化读谱训练
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
