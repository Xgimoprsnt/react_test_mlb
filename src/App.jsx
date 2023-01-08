import { useEffect, useState } from 'react'
import './App.css'
import ImgMediaCard from './components/card'
import MOCK_DATA from '../src/MOCK_DATA.json'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  const [selectGender, setGender] = useState();
  const [selectCountry, setCountry] = useState();
  const [searchTxt, setSearchTxt] = useState('');

  const handleSearch=(event)=>{
    setSearchTxt(event.target.value)
  }

  const ButtonGender = ({text})=>{
    return(
      <button   className={selectGender == text ? 'active' : undefined}               onClick={() => selectGender != text ? setGender(text) : setGender()}>{text}</button>
    )
  }

  const ButtonCountry = ({text})=>{
    return(
      <button   className={selectCountry == text ? 'active' : undefined}               onClick={() => selectCountry != text ? setCountry(text) : setCountry()}>{text}</button>
    )
  }

  return (
    <Container fixed>

      <Box sx={{ height: '100vh' }}  >

        <Typography variant="h4" component="div" textAlign={'center'} my={4}>
          Test
        </Typography>

        <Stack justifyContent={'center'} direction="row" spacing={2} mt={4} >
          <ButtonGender text={'Male'}></ButtonGender>
          <ButtonGender text={'Female'}></ButtonGender>
          <ButtonGender text={'Bigender'}></ButtonGender>
          <ButtonGender text={'Non-binary'}></ButtonGender>
          <ButtonGender text={'Agender'}></ButtonGender>
          <ButtonGender text={'Polygender'}></ButtonGender>
          <ButtonGender text={'Genderfluid'}></ButtonGender>
          <ButtonGender text={'Genderqueer'}></ButtonGender>
        </Stack>

        <Stack justifyContent={'center'} direction="row" spacing={2} mt={4}>
          <ButtonCountry  text={'Brazil'}></ButtonCountry>
          <ButtonCountry  text={'Thailand'}></ButtonCountry>
          <ButtonCountry  text={'Sweden'}></ButtonCountry>
          <ButtonCountry  text={'Japan'}></ButtonCountry>
          <ButtonCountry  text={'Netherlands'}></ButtonCountry>
        </Stack>

        <Stack justifyContent={'center'} direction="row" mt={5}>
          <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleSearch}  value={searchTxt} />
          <Button variant="text" onClick={()=> {
              setCountry()
              setGender()
              setSearchTxt('')
          }}>Clear</Button>
        </Stack>

        <Grid container spacing={2} px={5} mt={4}>
          {MOCK_DATA
            .filter((person) =>
              !!selectGender ? person.gender == selectGender : person
            )
            .filter((person) =>
              !!selectCountry ? person.country == selectCountry : person
            )
            .filter((person) =>
              !!searchTxt ? (
                person.first_name + ' ' + person.last_name).toLowerCase().includes(searchTxt.toLowerCase()) ||
                (person.first_name).toLowerCase().includes(searchTxt.toLowerCase()) ||
                (person.last_name).toLowerCase().includes(searchTxt.toLowerCase())
                : person
            )
            .map((person, i) => {
              return (
                <Grid item xs={6} md={4} key={i}>
                  <ImgMediaCard key={i} item={person} />
                </Grid>
              )
            })
          }
        </Grid>

      </Box>
    </Container>



  )
}

export default App
