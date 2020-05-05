import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: inline-flex;
justify-content: center;
width: 30%;
`

const Card = styled.div`
width: 75%;
padding: 2%;
background-color: slategray;
border-radius: 8px;
box-sizing: border-box;
margin: 20px 0;
`

const CharacterContainer =({name, species, image})=>{
    return (
      <Container>
      <Card>
        <h2>{name}</h2>
        <h3>{species}</h3>
        <img alt="character image" src={image} />

      </Card>
      </Container>
    );
  };
export default CharacterContainer; 