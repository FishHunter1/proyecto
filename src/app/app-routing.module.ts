import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasEconomicasComponent } from './components_paginas/categorias-economicas/categorias-economicas.component';
import { CategoriasHumanidadesComponent } from './components_paginas/categorias-humanidades/categorias-humanidades.component';
import { CategoriasJuridicaComponent } from './components_paginas/categorias-juridica/categorias-juridica.component';
import { CategoriasSaludComponent } from './components_paginas/categorias-salud/categorias-salud.component';

//rutas
import { CategoriasComponent } from './components_paginas/categorias/categorias.component';
import { InicioComponent } from './components_paginas/inicio/inicio.component';
import { NoticiasComponent } from './components_paginas/noticias/noticias.component';
import { SeriesComponent } from './components_paginas/series/series.component';
import { Series2Component } from './components_paginas/series2/series2.component';
import { AceComponent } from './pages/ace/ace.component';
import { BattleComponent } from './pages/battle/battle.component';
import { DateComponent } from './pages/date/date.component';
import { DeathComponent } from './pages/death/death.component';
import { EdenComponent } from './pages/eden/eden.component';
import { EggComponent } from './pages/egg/egg.component';
import { EvangeliongComponent } from './pages/evangeliong/evangeliong.component';
import { EvangelionpComponent } from './pages/evangelionp/evangelionp.component';
import { GivenComponent } from './pages/given/given.component';
import { KaguyaComponent } from './pages/kaguya/kaguya.component';
import { KomiComponent } from './pages/komi/komi.component';
import { MagicComponent } from './pages/magic/magic.component';
import { MonsterComponent } from './pages/monster/monster.component';
import { SpiceComponent } from './pages/spice/spice.component';
import { SpyComponent } from './pages/spy/spy.component';
import { SteinsComponent } from './pages/steins/steins.component';
import { StoneComponent } from './pages/stone/stone.component';
import { SummerComponent } from './pages/summer/summer.component';
import { TateComponent } from './pages/tate/tate.component';
import { WakimiComponent } from './pages/wakimi/wakimi.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'inicio'},
  {path: 'inicio', component:InicioComponent},
  {path: 'noticias', component:NoticiasComponent},
  {path: 'series', component:SeriesComponent},
  {path: 'series2', component:Series2Component},
  {path: 'categorias', component:CategoriasComponent},
  {path: 'kaguya', component:KaguyaComponent},
  {path: 'date', component:DateComponent},
  {path: 'komi', component:KomiComponent},
  {path: 'spy', component:SpyComponent},
  {path: 'summer', component:SummerComponent},
  {path: 'ace', component:AceComponent},
  {path: 'battle', component:BattleComponent},
  {path: 'tate', component:TateComponent},
  {path: 'wakimi', component:WakimiComponent},
  {path: 'stone', component:StoneComponent},
  {path: 'spice', component:SpiceComponent},
  {path: 'steins', component:SteinsComponent},
  {path: 'death', component:DeathComponent},
  {path: 'evangelionp', component:EvangelionpComponent},
  {path: 'evangeliong', component:EvangeliongComponent},
  {path: 'magic', component:MagicComponent},
  { path: 'given', component: GivenComponent},
  { path: 'egg', component: EggComponent },
  {path: 'monster', component: MonsterComponent},
  {path: 'eden', component: EdenComponent},
  {path: 'categorias_economicas', component:CategoriasEconomicasComponent},
  {path: 'categorias_humanidades', component:CategoriasHumanidadesComponent},
  {path: 'categorias_juridica', component:CategoriasJuridicaComponent},
  {path: 'categorias_salud', component:CategoriasSaludComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
