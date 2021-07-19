import React from 'react'
import { ServiceData } from './Data'
import { ServiceContainer, ServiceDesc, ServiceLogo, ServiceTitle, ServiceWrapper } from './ServicesStyles';

const Services = () => {
    return (
        <ServiceContainer>
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
