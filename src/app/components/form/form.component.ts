import {Component} from '@angular/core'
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent {
    show: boolean = false

    signalementForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        message: new FormControl(''),
    })

    onSubmit() {
        alert(
            "Merci pour votre signalement.\nNous l'avons bien reçu et nous nous en occuperons rapidement."
        )
        this.showModal()
    }

    showModal() {
        this.show = !this.show
    }
}
