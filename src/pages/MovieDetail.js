import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import {MovieState} from "../movieState";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname
    const [movies, setMovies] = useState(MovieState)
    const [movie, setMovie] = useState(null)

    useEffect(()=> {
        const currentMovie = movies.filter((movie)=> movie.url === url)
        setMovie(currentMovie[0])
    }, [movies, url])

    return (
        <>
            { movie && (
        <Details>
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="img"/>
            </HeadLine>
            <Awards>
                {movie.awards.map((award)=> {
                    return (
                       <Award key={award.title} title={award.title} description={award.description}/>
                    )
                })}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="img"/>
            </ImageDisplay>
        </Details>
            )}
        </>
    );
};
const Details = styled.div`
    color: white;
`
const HeadLine = styled.div`
    min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const AwardStyle = styled.div`
    padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    height: 0.5rem;
    margin: 1rem 0rem;
    background: #23d997;
    width: 50%;
  }
  p {
    padding: 1rem 0rem;
  }
`

const Awards = styled.div`
    min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`
const ImageDisplay = styled.div`
    min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;
