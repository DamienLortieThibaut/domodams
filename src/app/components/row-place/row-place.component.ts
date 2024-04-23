import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core'
import {Place} from '../../models/place'
import {TimerService} from '../../services/timer/timer.service'
import {LogService} from '../../services/log-service/log.service'
import {Log} from '../../models/log'

@Component({
    selector: 'app-row-place',
    templateUrl: './row-place.component.html',
    styleUrl: './row-place.component.scss',
})
export class RowPlaceComponent implements OnInit {
    @Input() place: Place

    @Output() supprimer = new EventEmitter<Place>()

    interval: any
    currentState: boolean = false
    forcedState: boolean = false
    show: boolean = false

    constructor(
        private timer_service: TimerService,
        private log_service: LogService
    ) {}

    ngOnInit(): void {
        this.currentState = false
        setInterval(() => {
            this.update()
        }, 1000)
    }

    update(): void {
        let currentDate = this.timer_service.getCurrentTime()
        let currentTime = currentDate.getHours() * 60 + currentDate.getMinutes()

        // Réinitialiser l'état actuel avant de commencer la boucle
        let newState = false

        this.place.actions.forEach((action) => {
            if (this.forcedState) return

            let startTime =
                action.startdAt.getHours() * 60 + action.startdAt.getMinutes()
            let endTime =
                action.endAt.getHours() * 60 + action.endAt.getMinutes()

            console.log(currentTime, startTime, endTime)
            if (currentTime >= startTime && currentTime <= endTime) {
                newState = true
            }
        })

        if (newState !== this.currentState) {
            if (newState) {
                let log: Log = {
                    text:
                        'Allumage de ' +
                        this.place.name +
                        ' à ' +
                        currentDate.getHours() +
                        ':' +
                        currentDate.getMinutes(),
                    created_at: currentDate,
                }
                this.log_service.addLog(log)
            } else {
                let log: Log = {
                    text:
                        'Extinction de ' +
                        this.place.name +
                        ' à ' +
                        currentDate.getHours() +
                        ':' +
                        currentDate.getMinutes(),
                    created_at: currentDate,
                }
                this.log_service.addLog(log)
            }
            this.currentState = newState
        }
    }

    forceState(): void {
        this.forcedState = !this.forcedState
        this.log_service.addLog({
            text:
                'Forçage de ' +
                this.place.name +
                ' à ' +
                new Date().getHours() +
                ':' +
                new Date().getMinutes(),
            created_at: this.timer_service.getCurrentTime(),
        })
        this.currentState = this.forcedState
    }

    showSettings(): void {
        console.log(this.place.name)
        this.show = !this.show
    }
}
