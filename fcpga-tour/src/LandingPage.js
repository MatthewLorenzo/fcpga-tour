import landingPage from "./landing_page.png";
import styled from "styled-components";

const PageContainer = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-image: url(${landingPage});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
`;

const PageCard = styled.div`
  border-radius: 20px;
  width: 60%;
  max-width: 500px;
  height: 50vh;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 1);
  padding: 40px;
  box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 768px) {
    width: 20%;
    height: 75vh;
  }
`;

const StyledButton = styled.button`
  height: 10%;
  width: 100%;
  margin-bottom: 50px;
  border-radius: 10px;
  font-weight: bold;
`;

export default function LandingPage() {
  return (
    <PageContainer>
      <PageCard>
        <StyledButton>Create League</StyledButton>
        <StyledButton>Join League</StyledButton>
      </PageCard>
    </PageContainer>
  );
}
