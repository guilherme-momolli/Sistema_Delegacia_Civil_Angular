import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { DebugPage } from './pages/debug-page/debug-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    
    { path:'', component: LandingPage},
    { path:'debug', component: DebugPage },
    { path: '**', component: NotFoundPage},
];
