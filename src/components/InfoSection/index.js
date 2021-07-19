import React from 'react'
import { Button } from '../ButtonStyles';
import Logo from '../../images/logo.svg'
import { ButtonWrap, DataWrap, InfoContainer, ButtonWrapDesk, InfoGreyBlock, InfoH1, InfoLogo, InfoP, InfoP1, InfoWrapper } from './InfoStyles';

const InfoSection = () => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoH1>Some title Some title Some title Some title Some title</InfoH1>
                <InfoP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </InfoP>
                <InfoGreyBlock>
                    <DataWrap>
                        <InfoLogo src={Logo} alt='logo' />
                        <InfoP1>Test automation is the practice of running tests automatically, managing test data, and utilizing results to improve software quality. It’s primarily a quality assurance measure, but its activities involve the commitment of the entire software production team. From business analysts to developers and DevOps engineers, getting the most out of test automation takes the inclusion of everyone.</InfoP1>
                    </DataWrap>
                    <ButtonWrap>
                        <Button width='100%' radius='8px'>Continue</Button>
                    </ButtonWrap>
                    <ButtonWrapDesk>
                        <Button radius='8px'>Continue</Button>
                    </ButtonWrapDesk>
                </InfoGreyBlock>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection;
