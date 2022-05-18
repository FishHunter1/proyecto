import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './components/barra/barra.component';
import { InicioComponent } from './components_paginas/inicio/inicio.component';
import { SeriesComponent } from './components_paginas/series/series.component';
import { CategoriasComponent } from './components_paginas/categorias/categorias.component';
import { NoticiasComponent } from './components_paginas/noticias/noticias.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { KaguyaComponent } from './pages/kaguya/kaguya.component';
import { DateComponent } from './pages/date/date.component';
import { KomiComponent } from './pages/komi/komi.component';
import { SpyComponent } from './pages/spy/spy.component';
import { SummerComponent } from './pages/summer/summer.component';
import { AceComponent } from './pages/ace/ace.component';
import { BattleComponent } from './pages/battle/battle.component';
import { TateComponent } from './pages/tate/tate.component';
import { WakimiComponent } from './pages/wakimi/wakimi.component';
import { Series2Component } from './components_paginas/series2/series2.component';
import { SpiceComponent } from './pages/spice/spice.component';
import { StoneComponent } from './pages/stone/stone.component';
import { SteinsComponent } from './pages/steins/steins.component';
import { DeathComponent } from './pages/death/death.component';
import { NisekoiComponent } from './pages/nisekoi/nisekoi.component';
import { EvangelionpComponent } from './pages/evangelionp/evangelionp.component';
import { EvangeliongComponent } from './pages/evangeliong/evangeliong.component';
import { MagicComponent } from './pages/magic/magic.component';
import { GivenComponent } from './pages/given/given.component';
import { EggComponent } from './pages/egg/egg.component';
import { MonsterComponent } from './pages/monster/monster.component';
import { EdenComponent } from './pages/eden/eden.component';
import { CategoriasJuridicaComponent } from './components_paginas/categorias-juridica/categorias-juridica.component';
import { CategoriasHumanidadesComponent } from './components_paginas/categorias-humanidades/categorias-humanidades.component';
import { CategoriasSaludComponent } from './components_paginas/categorias-salud/categorias-salud.component';
import { CategoriasEconomicasComponent } from './components_paginas/categorias-economicas/categorias-economicas.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    SeriesComponent,
    CategoriasComponent,
    NoticiasComponent,
    CarruselComponent,
    KaguyaComponent,
    DateComponent,
    KomiComponent,
    SpyComponent,
    SummerComponent,
    AceComponent,
    BattleComponent,
    TateComponent,
    WakimiComponent,
    Series2Component,
    SpiceComponent,
    StoneComponent,
    SteinsComponent,
    DeathComponent,
    NisekoiComponent,
    EvangelionpComponent,
    EvangeliongComponent,
    MagicComponent,
    GivenComponent,
    EggComponent,
    MonsterComponent,
    EdenComponent,
    CategoriasJuridicaComponent,
    CategoriasHumanidadesComponent,
    CategoriasSaludComponent,
    CategoriasEconomicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
