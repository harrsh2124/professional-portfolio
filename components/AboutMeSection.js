import React from 'react';
import MyData from '../data/myDetails';
import style from '../styles/Home.module.css';

const AboutMeSection = () => {
    return (
        <section className={`${style.aboutMeSectionContainer} ${style.sectionContainer}`}>
            <div className={style.detailsHeading}>About Me</div>

            <p className={style.totalExperience}>
                Total experience: {MyData.aboutMe.totalExperience} years
            </p>

            <p className={style.aboutMeDetails}>{MyData.aboutMe.details}</p>

            <p className={style.aboutMeDetails}>
                Sometimes I write at{' '}
                <a href={`https://${MyData.aboutMe.blogLink}`} target={'_blank'} rel="noreferrer">
                    {MyData.aboutMe.blogLink}
                </a>
            </p>
        </section>
    );
};

export default AboutMeSection;
