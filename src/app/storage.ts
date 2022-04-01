export class Storage {

    name: string;
    element: string;
    localvariable: Array<string> = [];
    localdonevariables: Array<string> = [];

    constructor(name: string, element: string) {
        this.name = name;
        this.element = element;
        this.oneitem();
        this.onedone();
    }
    set(name: string, element: string) {
        window.localStorage.setItem(this.name, JSON.stringify(element));

    }

    remove(element: string) {
        window.localStorage.removeItem(element);
        this.localvariable = this.localdonevariables.filter(e => e !== element)
    }

    oneitem() {
        if (!JSON.parse(window.localStorage.getItem(this.name))) {
            this.localvariable = []
        }
        else { this.localvariable = JSON.parse(window.localStorage.getItem(this.name)) }
    }

    onedone() {
        if (!JSON.parse(window.localStorage.getItem(this.name))) {
            this.localdonevariables = []
        }
        else { this.localdonevariables = JSON.parse(window.localStorage.getItem(this.name)) }
    }
}


