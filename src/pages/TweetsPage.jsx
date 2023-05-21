import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TweetCardsList from "../components/TweetCardsList/TweetCardsList";
import { Box2, Container, Section } from "./HomePage/HomePage.styled";
import { FilterDropdown } from '../components/FilterDropdown/FilterDropdown';
import { BackBtn } from './TweetsPage.styled';


export default function Tweets() {
  const [selectedValue, setSelectedValue] = useState('default');

  const handleChange = selectedValue => {
    setSelectedValue(selectedValue);
  };

  const navigate = useNavigate();

  return (
    <Section>
    <Container>
    <BackBtn type="button" onClick={() => navigate(-1)}>
        Back
      </BackBtn>
      <Box2>
        <FilterDropdown onChange={handleChange} />
      <TweetCardsList selectedValue={selectedValue} />
      </Box2>
      </Container>
    </Section>
  );
}

