import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { LogsComponent } from './components/logs/logs.component';
import { RowPlaceComponent } from './components/row-place/row-place.component';
import { PlacesContainerComponent } from './components/places-container/places-container.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormComponent } from './components/form/form.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        LogsComponent,
        RowPlaceComponent,
        PlacesContainerComponent,
        TimerComponent,
        FormComponent,
        InstructionsComponent,
        HomeComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
