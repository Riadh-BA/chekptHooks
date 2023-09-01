
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'

function MovieCard({moviee}) {

  return (
    <div>

        

    <Card className='cradstyle' style={{ width: '18rem'}}>
      <Card.Img className="foto" variant="top" src={moviee.wallpaper} />
      <Card.Body>
        <Card.Title><p>Title: <span>{moviee.title}</span></p></Card.Title>
        <Card.Text>
        <p>Description: <span>{moviee.description}</span></p>
        </Card.Text>
        
        <ReactStars
        count={5}
        value={moviee.rate}
        edit={false}
        half={false}
        size={24}
        color2={'#ffd700'} />
              
        <Button className='buttonStyle' variant="primary" onClick={moviee.trailer} >Trailer</Button>
        
      </Card.Body>
    </Card>
    </div>
  );
}

export default MovieCard;