import './Card.scss'
import { 
  Card as CardMui, 
  CardContent,
  CardMedia, 
  Typography, 
  CardActionArea
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Good } from '../../utils/interface';

export function Card({
  image,
  id,
  name,
  description,
  cost,
  brand,
}: Good) {
  return (
    <div className='card'>
      <Link to={`/good/${id}`} className='card__link'>
      <CardMui sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              className='card__img'
              component="img"
              sx={{
                objectFit: 'contain'
              }}
              image={image}
              alt="product"
            />
            <CardContent>
              <div className='card__info'>
                <Typography gutterBottom variant="h5" component="div"> Brand: {brand} </Typography>
                <Typography gutterBottom variant="h5" component="div"> Model: {name}  </Typography>
                <Typography gutterBottom variant="h5" component="div"> Price: {cost} USD  </Typography>
                <Typography variant="body2" color="text.secondary"> {description} </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </CardMui>
        </Link>
    </div>
  );
}
export default Card;

