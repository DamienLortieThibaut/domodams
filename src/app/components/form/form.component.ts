import {Component} from '@angular/core'
import {Validators, FormBuilder} from '@angular/forms'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent {
    show: boolean = false

    signalementForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        message: ['', Validators.required],
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

    constructor(private formBuilder: FormBuilder) {}
}
