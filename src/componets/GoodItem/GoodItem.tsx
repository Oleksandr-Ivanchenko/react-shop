import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  CardMedia, 
  Typography, 
} from '@mui/material';
import { Good } from '../../utils/interface';
import { getGood } from '../../api/api';
import './GoodItem.scss'

export function GoodItem() {
  const { id } = useParams();

  const [good, setGood] = useState<Good>({} as Good);

  useEffect(() => {
    getGood(id || '').then((res: Good) => {
      setGood(res);
    })
  }, [id]);
  

  return (
    <div className='good'>
      <CardMedia
        className='good__img'
        component="img"
        sx={{
          objectFit: 'contain'
        }}
        image={good.image}
        alt="product"
      />
      <div className='good__info'>
        <Typography gutterBottom variant="h5" component="div"> Model: {good.name}  </Typography>
        <Typography gutterBottom variant="h5" component="div"> Brand: {good.brand} </Typography>
        <Typography gutterBottom variant="h5" component="div"> Price: {good.cost} USD  </Typography>
        <Typography variant="body2" color="text.secondary"> {good.description} </Typography>
      </div>
    </div>
  );
}
export default GoodItem;

