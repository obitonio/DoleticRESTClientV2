import { Project } from './project';
import { AmendmentType } from './amendment-type';

export class NewAmendment{
    constructor(
        public project?:Project,
        public types?:AmendmentType[],
        public content?:string,
        public attributable?: boolean,
        public date?: string
    ){

    }
}