import { Log } from './log';
import { Action } from './action';

export interface Place {
    name: string;
    image: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    logs: Log[];
    actions: Action[];
}