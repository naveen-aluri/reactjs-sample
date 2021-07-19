import React from 'react';
import { TestimonialContainer, TCard, TWrapper, Title, ReviewCard, TReview, NameCard, Name, JobTitle, StarIcon, RatingWrap } from './TestimonialStyles';
import { Testimonials } from './Data';

const Testimonial = () => {
    return (
        <TestimonialContainer>
            <TCard>
                <Title>Testimonials for our training program</Title>
                <TWrapper>
                    {Testimonials.map(item => (
                        <ReviewCard>
                            <RatingWrap>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </RatingWrap>
                            <TReview>{item.review}</TReview>
                            <NameCard>
                                <Name>{item.name}</Name>
                                <JobTitle>{item.designation}</JobTitle>
                            </NameCard>
                        </ReviewCard>

                    ))}
                </TWrapper>
            </TCard>
        </TestimonialContainer>
    )
}

export default Testimonial;
