import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: ${pr => pr.theme.display.display};
    justify-content: center;
    `

const StyledWrapper = styled.div`
    display: ${pr => pr.theme.display.display};

    background-color: ${pr => pr.theme.bgColor};
    color: ${pr=> pr.theme.textColor};
    margin: ${pr => pr.theme.margin.small};
    border: 2px solid ${pr => pr.theme.borderColor};
    border-radius: 20px;
    width: 60%;
    `

const InfoBlock = styled.div`
    display: ${pr => pr.theme.display.display};
    flex-direction: ${pr => pr.theme.display.flexdir};
    margin: auto;

h1 {
    color: ${pr => pr.theme.titlesColor};
    font-size: ${pr => pr.theme.h1.fontsize};
    width: ${pr => pr.theme.h1.width};
}

p {
    color: ${pr => pr.theme.textColor};

}
`

const Character = ({name, gender, species, origin, location, status, image}) => {

return (
    <Container>
        <StyledWrapper>
        <img src={image} />
            <InfoBlock>
                <p>Name: {name}</p>
                <p>Gender: {gender}</p>
                <p>Species: {species}</p>
                <p>Origin: {origin}</p>
                <p>Location: {location}</p>
                <p>Status: {status}</p>
            </InfoBlock>
        </StyledWrapper>
    </Container>
    )
}

export default Character