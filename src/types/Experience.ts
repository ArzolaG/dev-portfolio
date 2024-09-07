import type {Skill} from "./Skill";

export interface Experience  {
    id:string;
    position:string;
    company:string;
    dateStart:string;
    dateEnd: string;
    description:string[];
    keywords:string[];
    skills:Skill[];
}

