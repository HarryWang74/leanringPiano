import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { Week02aComponent } from './week02/week02a/week02a.component';
import { Week04aComponent } from './week04/week04a/week04a.component';
import { Week01aComponent } from './week01/week01a/week01a.component';
import { Week05aComponent } from './week05/week05a/week05a.component';
import { Week04bComponent } from './week04/week04b/week04b.component';

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
  { path: 'week01a', component: Week01aComponent }, // 钢琴简介
  { path: 'week05a', component: Week05aComponent }, // 弹奏音阶
  { path: 'week04b', component: Week04bComponent }, // 提升输出音质
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
