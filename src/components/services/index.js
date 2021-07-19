import React from 'react'
import { ServiceData } from './Data'
import { PageRoute } from '../../constants';
import { ServiceContainer, ServiceDesc, ServiceLogo, ServiceTitle, ServiceWrapper } from './ServicesStyles';

const Services = () => {
    return (
        <ServiceContainer id={PageRoute.Courses}>
            {ServiceData.map(service => (
                <ServiceWrapper>
                    <ServiceLogo src={service.image} />
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDesc>{service.desc}</ServiceDesc>
                </ServiceWrapper>
            ))}
        </ServiceContainer>
    )
}

export default Services;
