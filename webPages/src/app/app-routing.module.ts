import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { Week02aComponent } from './week02/week02a/week02a.component';
import { Week04aComponent } from './week04/week04a/week04a.component';
const routes: Routes = [
  { path: 'timeline', component: TimelineComponent},
  { path: 'keyboard', component: KeyboardComponent},
  { path: '',
      redirectTo: '/keyboard',
      pathMatch: 'full'
  },
  // weeks
  { path: 'week02a', component: Week02aComponent }, // 强化读谱训练
  { path: 'week04a', component: Week04aComponent }, // 中级技巧
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
