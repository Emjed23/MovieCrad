import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';

const MovieCards = ({Movie}) => {
  return (
    <div >
    <Card style={{ width: '25rem' , height:'25rem '}}>
      <Card.Body>
        <Card.Title>{Movie.title}</Card.Title>
        <Card.Img variant ="top" src={Movie.posterUrl}/>
        <ReactStars className='rating'
  count={5}
  value={Movie.rate}
  edit={false}
  size={25}
  color2={' #0a2b280'}
  align-items={'center'} 
   />
        <Card.Text> {Movie.description} </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
  );
}

export default MovieCards