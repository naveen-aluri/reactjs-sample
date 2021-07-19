import React from 'react'
import { Button } from '../ButtonStyles'
import { PageRoute } from '../../constants';
import { Desc, LearnMoreContainer, Title } from './LearnMoreStyles';

const LearnMore = () => {
    return (
        <LearnMoreContainer id={PageRoute.AboutUs}>
            <Title>Do you have custom training needs? </Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </Desc>
            <Button>Learn more</Button>
        </LearnMoreContainer>
    )
}

export default LearnMore;
