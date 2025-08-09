import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [{
    //http://localhost:4200
    //http://localhost:4200/
    path:'',
    component: AccueilComponent,
    title: 'Portfolio - Accueil' //texte dans l'onglet
    },
    /*{
        path:'exercice/:id',
        component: DetailExerciceComponent,
        title: 'Exercices - Détail'
    },*/
    {
    path:'projets',
    component: ProjetsComponent,
    title: 'Portfolio - Projets' //texte dans l'onglet
    },
    {
    path:'contact',
    component: ContactComponent,
    title: 'Portfolio - Contact' //texte dans l'onglet
    },
    /* insérer ici toutes les autres routes */
    { 
    path: '**',
    component: PageNotFoundComponent,
    title: 'Portfolio - 404' //texte dans l'onglet
    }
];
