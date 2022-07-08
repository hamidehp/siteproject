import { DeclarationListEmitMode } from "@angular/compiler";

export class Slider {
    constructor (
        public id :number,
        public isDelete: boolean  ,
        public createDate :Date ,
        public lastUpdateDate:Date,
        public title:string ,
        public description:string,
        public link:string,
        public imageName:string){

    }
}
