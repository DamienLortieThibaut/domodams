import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './pages/app-page/app-routing.module'
import {AppComponent} from './pages/app-page/app.component'
import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer/footer.component'
import {ButtonComponent} from './components/button/button.component'
import {LogsComponent} from './components/logs/logs.component'
import {RowPlaceComponent} from './components/row-place/row-place.component'
import {PlacesContainerComponent} from './components/places-container/places-container.component'
import {ReactiveFormsModule} from '@angular/forms'
import {TimerComponent} from './components/timer/timer.component'
import {FormComponent} from './components/form/form.component';

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
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
