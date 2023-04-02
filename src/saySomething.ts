export default class SaySomething {
    message: string;

    //initialize
    constructor(message:string){
        this.message = message
    }

    public sayText(elem: HTMLElement | null){
        if(elem){
            elem.innerText = this.message
        }
    }
}
