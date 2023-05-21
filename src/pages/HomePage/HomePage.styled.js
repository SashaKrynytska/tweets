import styled from "@emotion/styled";

export const Section = styled.section`
margin: 0 auto;
  padding: 20px 0;
  width: 1200px;
`;

export const Container = styled.div`
  padding: 0 16px;
  margin: auto;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1200px;
  }
`;

export const Box2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
margin: 0 auto;
max-width: 1600px;
  padding: 20px;

  color: #4B2A99;
  font-size: 16px;
  border-radius: 8px;

  & h1,
  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;
