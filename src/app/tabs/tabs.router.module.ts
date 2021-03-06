import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { HomePage } from '../home/home.page';
import { SetupPage } from '../setup/setup.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'tab2',
        outlet: 'tab2',
        component: Tab2Page
      },
      {
        path: 'tab3',
        outlet: 'tab3',
        component: Tab3Page
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'setup',
        outlet: 'setup',
        component: SetupPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
