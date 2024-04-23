import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    @Input() label: string
    @Input() disabled: boolean
    @Input() class: string;

    @Output() EventEmitter = new EventEmitter();

    action() {
        this.EventEmitter.emit();
    }
}
