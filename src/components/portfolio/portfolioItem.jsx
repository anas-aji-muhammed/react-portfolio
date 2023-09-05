import React from 'react';
import styles from './Portfolio.module.scss'
import {socialIcons} from '../../images/social/socialImages'
import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'
import {onClickOpenInNewTabHandler} from '../../utils/helperFunctions'

function PortfolioItem(props) {
    const project = props.project;
    const isEven = project.orderNumber % 2 === 0;
    const hasCode = project.hasCode;

    return (
        (isEven)? <div className={styles.portfolioItemContainer} >
                <div className={styles.portfolioItemContent}>
                    {
                        project.hasCoverImage?
                    <div className={styles.portfolioItemImageContainer}>
                        {project.coverImages.map((coverImage, index)=>(
                                <div>
                                    <img className={styles.portfolioItemImageItem} key={index} src={coverImage} alt="coverImage" />
                                </div>
                            ))}
                    </div>
                    :<div></div>
                    }

                    <div className={styles.portfolioItemDetails}>
                        <h3>{project.projectName}</h3>
                        <p>{project.description}</p>
                        <p style={{"color":"black"}}>Developer With</p>
                        <div className={styles.techStackUsed}>
                            {project.techStack.map((tech, index)=>(
                                <div>
                                    {/* <img key={index} src={tech} alt="techStackIcons" /> */}
                                    <h2 className={styles.techStackIcon}>{tech}</h2>
                                </div>
                            ))}
                            </div>
                        <div className={styles.demoLinks}>
                            {
                            (hasCode)?
                            <div onClick={(event=>onClickOpenInNewTabHandler(event, project.codeRepo))}>
                                <h3>Code</h3>
                                <img src={socialIcons.githubIcon} alt="githubIcon"/>

                            </div>:<div></div>
                            }
                            <div onClick={(event=>onClickOpenInNewTabHandler(event, project.liveURL))}>
                                <h3>Demo</h3>
                                <img src={socialIcons.linkIcon} alt="linkIcon" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>:
            <div className={styles.portfolioItemContainer}>
                <div className={styles.portfolioItemContent}>

                    <div className={styles.portfolioItemDetails}>
                    <h3>{project.projectName}</h3>
                        <p>{project.description}</p>
                        
                        <div className={styles.techStackUsed}>
                            {project.techStack.map((tech, index)=>(
                                <div>
                                    {/* <img key={index} src={tech} alt="techStackIcons" /> */}
                                    <h2 className={styles.techStackIcon}>{tech}</h2>
                                </div>
                            ))}
                        </div>
                        <div className={styles.demoLinks}>
                            {
                            (hasCode)?
                            <div onClick={(event=>onClickOpenInNewTabHandler(event, project.codeRepo))}>
                                <h3>Code</h3>
                                <img src={socialIcons.githubIcon} alt="githubIcon"/>

                            </div>:<div></div>
                            }
                            <div onClick={(event=>onClickOpenInNewTabHandler(event, project.liveURL))}>
                                <h3>Demo</h3>
                                <img src={socialIcons.linkIcon} alt="linkIcon" />
                            </div>

                        </div>
                    </div>
                    {
                        project.hasCoverImage?
                    <div className={styles.portfolioItemImageContainer}>
                        {project.coverImages.map((coverImage, index)=>(
                                <div>
                                    <img className={styles.portfolioItemImageItem} key={index} src={coverImage} alt="coverImage" />
                                </div>
                            ))}
                    </div>
                    :<div></div>
                    }


                </div>

            </div>
        )




}

export default PortfolioItem;