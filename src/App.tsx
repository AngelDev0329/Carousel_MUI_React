import { styled } from "@mui/material";
import { CustomCarousel } from "./CustomCarousel";

const Container = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Logo = styled("img")`
  width: 150px;
  height: 75px;
  object-fit: contain;
  object-position: center;
  filter: grayscale(100%);

  opacity: 0.5;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
    filter: initial;
  }
`;

function App() {
  return (
    <Container>
      <CustomCarousel margin="0 30px" speed="45s" pauseOnHover>
        <Logo src="https://logos-download.com/wp-content/uploads/2016/07/Optus_logo_blue.png" />
        <Logo src="https://logos-download.com/wp-content/uploads/2016/11/Lebara_Mobile_logo.png" />
        <Logo src="https://logos-download.com/wp-content/uploads/2016/05/Telstra_logo.png" />
        <Logo src="https://logos-download.com/wp-content/uploads/2016/04/Virgin_Mobile_logo_logotype.png" />
        <Logo src="https://logos-download.com/wp-content/uploads/2016/07/IiNet_logo.png" />
        <Logo src="https://logos-download.com/wp-content/uploads/2016/06/Boost_Mobile_logo_wordmark.png" />
        <Logo src="https://logos-download.com/wp-content/uploads/2016/04/ATT_logo_blue.png" />
        <Logo src="https://logos-download.com/wp-content/uploads/2016/04/3_Italia_Tre_logo_logotype-550x700.png" />
        <Logo src="https://logos-download.com/wp-content/uploads/2016/04/Verizon_logo_logotype.png" />
      </CustomCarousel>
    </Container>
  );
}

export default App;
