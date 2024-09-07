import type {Skill} from "./Skill"

export interface Link {
    id:string;
    name:string;
    url:string;
}

export interface Project  {
    id:string;
    name:string;
    icon:string;
    links:Link[];
    description:string;
    keywords:string[];
    skills:Skill[];
}

