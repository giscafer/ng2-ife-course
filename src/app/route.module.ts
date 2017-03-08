import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import  {CourseComponent} from './course/course.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }, {
    path: 'xiaowei',
    component: CourseComponent,
  }, {
    path: 'binbin',
    component: CourseComponent,
  }, {
    path: 'yaoyao',
    component: CourseComponent,
  }, {
    path: 'business',
    component: CourseComponent,
  }, {
    path: 'echarts-vr',
    component: CourseComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouteModule {
}
