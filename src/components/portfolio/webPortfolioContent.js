import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'
import {FaReact, FaNode} from 'react-icons/fa6'
import {SiMongodb, SiExpress, SiFirebase, SiJavascript, SiJsonwebtokens} from 'react-icons/si'
import {projectImages} from '../../images/projects/projectImages'

const blogAppProject = {
    "projectName": "My Blog App",
    "description": "Designed and developed blogging app with MERN stack, JWT, Firebase storage as blob and React quill.",
    "hasCode": true,
    "liveURL": "",
    "codeRepo":"https://github.com/anas-aji-muhammed/blog-app-mern/tree/main",
    "orderNumber" : 1,
    "techStack": [
                <FaReact/>, 
                <FaNode/>, 
                <SiMongodb/>, 
                <SiExpress/>, 
                <SiFirebase/>, 
                <SiJavascript/>, 
                <SiJsonwebtokens/>, 
            ],
    "hasCoverImage": true,
    "animateCoverImage": true,
    "coverImages": projectImages.blogImages


}


export const webProjects = [
    blogAppProject
    
];