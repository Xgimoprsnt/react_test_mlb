import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({item}) {
    // const {item}  = props
    // console.log(item,'item')
  return (
    <Card sx={{ Width: 345,m:2 }}>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
      />
      <CardContent>
        <Typography  variant="body2" component="div" color="text.secondary" textAlign={'center'} >
          {item.first_name} {item.last_name}
        </Typography>
        <Typography variant="body2" marginTop={1} component="div" textAlign={'center'} >
          {item.gender}
        </Typography>
        <Typography variant="body2" marginTop={1} component="div" textAlign={'center'} >
          {item.email}
        </Typography>
        <Typography variant="body2" marginTop={1} component="div"  textAlign={'center'} >
          {item.country}
        </Typography>
      </CardContent>
   
    </Card>
  );
}