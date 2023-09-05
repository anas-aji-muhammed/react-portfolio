import React from 'react';
import styles from './Portfolio.module.scss'
import {socialIcons} from '../../images/social/socialImages'
import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'

function PortfolioItem(props) {
    const project = props.project;
    const isEven = project.orderNumber % 2 === 0;
    const hasCode = project.hasCode;
    
    function onClickHandler(event, url){
        event.preventDefault();
        if (url) {
            window.open(url, '_blank');
          }

    }

    return (
        (isEven)? <div className={styles.portfolioItemContainer} >
                <div className={styles.portfolioItemContent}>
                    <img src="https://picsum.photos/200/300" alt="profilePic" className={styles.portfolioItemImageContainer}/>

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
                            <div onClick={(event=>onClickHandler(event, project.codeRepo))}>
                                <h3>Code</h3>
                                <img src={socialIcons.githubIcon} alt="githubIcon"/>

                            </div>:<div></div>
                            }
                            <div>
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
                            <div onClick={(event=>onClickHandler(event, project.codeRepo))}>
                                <h3>Code</h3>
                                <img src={socialIcons.githubIcon} alt="githubIcon"/>

                            </div>:<div></div>
                            }
                            <div onClick={(event=>onClickHandler(event, project.liveURL))}>
                                <h3>Demo</h3>
                                <img src={socialIcons.linkIcon} alt="linkIcon" />
                            </div>

                        </div>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="profilePic" className={styles.portfolioItemImageContainer}/>

                </div>

            </div>
        )




}

export default PortfolioItem;