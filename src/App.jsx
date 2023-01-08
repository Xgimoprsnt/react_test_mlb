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

  return (
    <Container fixed>

      <Box sx={{ height: '100vh' }}  >

        <Typography variant="h4" component="div" textAlign={'center'} my={4}>
          Test
        </Typography>

        <Stack justifyContent={'center'} direction="row" spacing={2} mt={4} >
          <button   className={selectGender == 'Male' ? 'active' : undefined}               onClick={() => selectGender != 'Male' ? setGender('Male') : setGender()}>Male</button>
          <button   className={selectGender == 'Female' ? 'active' : undefined}             onClick={() => selectGender != 'Female' ? setGender('Female') : setGender() }>Female</button>
          <button   className={selectGender == 'Bigender' ? 'active' : undefined}           onClick={() => selectGender != 'Bigender' ?  setGender('Bigender'): setGender()}>Bigender</button>
          <button   className={selectGender == 'Non-binary' ? 'active' : undefined}         onClick={() => selectGender != 'Non-binary' ?  setGender('Non-binary') : setGender()}>Non-binary</button>
          <button   className={selectGender == 'Agender' ? 'active' : undefined}            onClick={() => selectGender != 'Agender' ?   setGender('Agender') : setGender()}>Agender</button>
          <button   className={selectGender == 'Polygender' ? 'active' : undefined}         onClick={() => selectGender != 'Polygender' ?   setGender('Polygender') : setGender()}>Polygender</button>
          <button   className={selectGender == 'Genderfluid' ? 'active' : undefined}        onClick={() => selectGender != 'Genderfluid' ?  setGender('Genderfluid') : setGender()}>Genderfluid</button>
          <button   className={selectGender == 'Genderqueer' ? 'active' : undefined}        onClick={() => selectGender != 'Genderqueer' ?  setGender('Genderqueer') : setGender()}>Genderqueer</button>
        </Stack>

        <Stack justifyContent={'center'} direction="row" spacing={2} mt={4}>
          <button  className={selectCountry == 'Brazil' ? 'active' : undefined}             onClick={() => selectCountry != 'Brazil' ?  setCountry('Brazil') : setCountry()}>Brazil</button>
          <button className={selectCountry == 'Thailand' ? 'active' : undefined}            onClick={() => selectCountry != 'Thailand' ?  setCountry('Thailand'): setCountry()} >Thailand</button>
          <button className={selectCountry == 'Sweden' ? 'active' : undefined}              onClick={() => selectCountry != 'Sweden' ?  setCountry('Sweden') : setCountry()} >Sweden</button>
          <button className={selectCountry == 'Japan' ? 'active' : undefined}               onClick={() => selectCountry != 'Japan' ? setCountry('Japan'): setCountry()}>Japan</button>
          <button className={selectCountry == 'Netherlands' ? 'active' : undefined}         onClick={() =>  selectCountry != 'Netherlands' ? setCountry('Netherlands') : setCountry()}>Netherlands</button>
        </Stack>

        <Stack justifyContent={'center'} direction="row" mt={5}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleSearch}  value={searchTxt} />
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
