export interface TimeState {
    seconds: number;
}

export interface MoneyState {
    ballance: number;
}
export interface AppState {
    time: TimeState;
    money: MoneyState;
}
