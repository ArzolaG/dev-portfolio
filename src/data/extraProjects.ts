import type {Project} from "../types/Project"

export const PROJECTS:Project[] =[
    {
        id:"bamboo",
        icon:"bamboo",
        name:"Bamboo Flower Shop",
        links: [
            {
                id:"open",
                name:"Preview",
                url:"https://bamboofloreriatijuana.com/"
            }   
        ],
        description:['An elegant and user-friendly e-commerce site designed for a flower shop, offering a variety of floral arrangements. '],
        keywords:["e-commerce"],
        skills: [
            {
                id:"html",
                name:"HTML"
            },
            {
                id:"css",
                name:"CSS"
            },
            {
                id:"javascript",
                name:"JavaScript"
            },
            {
                id:"php-v2",
                name:"PHP"
            },
            {
                id:"mysql",
                name:"MySQL"
            }
        ]
    },
    {
        id:"skate",
        icon:"skate",
        name:"Skate Shop",
        links: [
            {
                id:"github",
                name:"GitHub",
                url:"https://github.com/ArzolaG/Skateboard"
            },
            {
                id:"open",
                name:"Preview",
                url:"https://arzolag.github.io/Skateboard/"
            }
        ],
        description:['A clean, minimal landing page for a skate shop, showcasing the latest products with easy navigation and a stylish design.'],
        keywords:["skate"],
        skills: [
            {
                id:"html",
                name:"HTML"
            },
            {
                id:"css",
                name:"CSS"
            }
        ]
    },

]