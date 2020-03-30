import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TablerepComponent } from './components/tablerep/tablerep.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardDisplayComponent } from './components/card-display/card-display.component';
import { BarrepresentComponent } from './components/barrepresent/barrepresent.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TablerepComponent,
    DoughnutChartComponent,
    NavbarComponent,
    CardDisplayComponent,
    BarrepresentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
