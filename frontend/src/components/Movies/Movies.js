import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import MovieItem from './MovieItem'
import { getAllMovies } from '../../API-Helpers/api-helpers'
const Movies = () => {
  const [Movies, setMovies] = useState([])
  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies)).catch((err)=>console.log(err))
  }
  ,[])

  return (
    <Box margin="auto" marginTop={4} alignItems="center" display="flex" justifyContent="center" flexDirection="column">
  <Typography variant='h4' padding={2} textAlign='center' bgcolor={'#900C3F'} width="40%" color="white" margin={"auto"}>
    All Movies
  </Typography>
  <Box width={"90%"} margin={'auto'} marginTop='5' padding={4} display={"flex"} justifyContent='center' flexWrap={'wrap'}>
    {Movies.map((item,index)=>
      <MovieItem id={item._id}
        title={item.title}
        posterUrl={item.posterUrl}
        releaseDate={item.releaseDate}
        key={index} />
    )}
  </Box>
  </Box>
  )
}

export default Movies