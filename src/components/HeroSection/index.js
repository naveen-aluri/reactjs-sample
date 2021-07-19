import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroH1Wrapper, HeroP } from './HeroSectionStyles';
import BackgroundImg from '../../images/consulting.svg'
import { Button } from '../ButtonStyles';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg src={BackgroundImg} alt='background' />
            <HeroContent>
                <HeroH1>
                    Fully remote instructor-led<br />
                    Corporate Training in <HeroH1Wrapper>Test Automation for QA teams</HeroH1Wrapper>
                </HeroH1>
                <HeroP>
                    CypressIO, CucumberJS, Puppeteer, Selenium, Robot & more ...
                </HeroP>
                <Button>Learn more</Button>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
