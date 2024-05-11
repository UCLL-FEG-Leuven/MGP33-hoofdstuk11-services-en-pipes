export class Klok {
    name: string = "Thuis";
    timeZone: string = "Europe/Brussels";
    locale: string = "nl-BE";

    constructor(name: string, timeZone: string, locale: string) {
        this.name = name;
        this.timeZone = timeZone;
        this.locale = locale;
    }
}