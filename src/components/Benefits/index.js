import React from 'react'
import { BenefitsData } from '../Benefits/Data'
import { PageRoute } from '../../constants';
import { BenefitsContainer, BenefitsH1, BenefitsWrapper, Benefit, BImage, BTitle, BDesc, BWrap } from './BenefitsStyles';

const Benefits = () => {
    return (
        <BenefitsContainer id={PageRoute.ReferralBonus}>
            <BenefitsH1>Benefits of Automation Lab Training program</BenefitsH1>
            <BenefitsWrapper>
                {BenefitsData.map(benefit => (
                    <Benefit>
                        <BImage src={benefit.image} alt={benefit.title} />
                        <BWrap>
                            <BTitle>{benefit.title}</BTitle>
                            <BDesc>{benefit.desc}</BDesc>
                        </BWrap>
                    </Benefit>
                ))}

            </BenefitsWrapper>
        </BenefitsContainer>
    )
}

export default Benefits;
