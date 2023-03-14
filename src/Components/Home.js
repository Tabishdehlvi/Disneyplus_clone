import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommend";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import NewDisney from "./newDisney";
import Starwars from "./Starwars";
import Marvel from "./Marvel";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let starwars = [];
  let marvel = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            // recommends = [...recommends, { id: doc.id, ...doc.data() }];
            recommends.push({id: doc.id, ...doc.data()});
            break;

          case "disney":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "starwars":
            starwars = [...starwars, { id: doc.id, ...doc.data() }];
            break;

          case "action":
            marvel = [...marvel, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          starwars: starwars,
          marvel: marvel,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Starwars />
      <Marvel />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;