import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'
import {FaSwift, FaAndroid} from 'react-icons/fa6'
import {SiFlutter, SiDart, SiIos, SiFirebase, SiKotlin} from 'react-icons/si'
import {projectImages} from '../../images/projects/projectImages'

const specsShopperProject = {
    "projectName": "Specshoppereeee",
    "description": "Designed and developed critical portions of Specshopper eyewear shopping app. Developed with Flutter for IOS and Android.",
    "hasCode": false,
    "liveURL": "https://play.google.com/store/apps/details?id=com.seeroo.specshopper",
    "codeRepo":"",
    "coverIMG":"",
    "orderNumber" : 1,
    "techStack": [
                <SiFlutter/>, 
                <SiDart/>, 
                <FaAndroid/>, 
                <SiIos/>, 
                <SiFirebase/>, 
                <SiKotlin/>, 
                <FaSwift/>, 
            ],
    "hasCoverImage": true,
    "coverImages": projectImages.specshopperImages


}

const instaMeatProject = {
    "projectName": "InstaMeat",
    "description": "Developed critical portions of the InstaMeat freshfood delivery app using Flutter for iOS and Android which has over 100,000 downloads and 4.7 rating in Google Play Store.",
    "hasCode": false,
    "liveURL": "https://play.google.com/store/apps/details?id=com.everydaymeat.mobile",
    "codeRepo":"",
    "coverIMG":"",
    "orderNumber" : 2,
    "techStack": [
                <SiFlutter/>, 
                <SiDart/>, 
                <FaAndroid/>, 
                <SiIos/>, 
                <SiFirebase/>, 
                <SiKotlin/>, 
                <FaSwift/>, 
            ],
    "hasCoverImage": true,
    "coverImages": projectImages.instameatImages

}

const unidocProject = {
    "projectName": "Unidoc - Doctor Appointment App",
    "description": "Led the team and developed critical portions of phase 2 of Unidoc Doctor Appointment app. Worked with Google Distance Matrix and Places Api.",
    "hasCode": false,
    "liveURL": "https://play.google.com/store/apps/details?id=com.ae.unidoc&hl=en_IN&gl=US",
    "codeRepo":"",
    "coverIMG":"",
    "orderNumber" : 1,
    "techStack": [
                <SiFlutter/>, 
                <SiDart/>, 
                <FaAndroid/>, 
                <SiIos/>, 
                <SiFirebase/>, 
                <SiKotlin/>, 
                <FaSwift/>, 
            ],
    "hasCoverImage": true,
    "coverImages": projectImages.unidocImages

}

export const webProjects = [
    unidocProject,
    instaMeatProject,
    specsShopperProject
    
];