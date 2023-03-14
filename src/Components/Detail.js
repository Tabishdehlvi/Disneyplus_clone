import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';

const Detail = (props) => {

    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log("no such document in firebase 🔥");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [id]);

    return (
        <Container>
            <Background>
                <img alt={detailData.title} src={detailData.backgroundImg} />
            </Background>
            <Title>
                <h2>{detailData.title}</h2>
            </Title>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>WATCH NOW</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <a href={detailData.trailor} target={'_blank'}><span>TRAILOR</span></a>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {detailData.subTitle}
            </SubTitle>
            <Description>
               {detailData.description}
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px );
    position: relative;
`

const Background = styled.div`
    position: fixed;
    background-image: radial-gradient(farthest-side at 73% 21%,transparent,rgb(33 35 51));
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
    }
`

const Title = styled.div`
    font-size: 22px;
    margin-top: 140px;
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    font-size: 15px;
    padding: 0px 20px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249)
    border-radius: 4px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0);
    border: 1px solid rgba(249, 249, 249);
    
    a {
        text-decoration: none;
        color: rgba(249, 249, 249);
    }

    &:hover {
        background: rgba(0, 0, 0, 0.4);
    }
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6); 
    cursor: pointer;
    
    span {
        font-size: 28px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    letter-spacing: 1.8px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px;
`