import logogomycode from './logogomycode.png';
import { Card } from "react-bootstrap";
import './App.css';
import ReactPlayer from 'react-player'



function App() {
  return (
    <div className="App">

<div className="title"> 
      <img className="image1" src={logogomycode} alt="Logo" />
      <h1 className="titlered " >Programme de  bourses Go My Code</h1>
</div>
<div className="cartes">
<Card className="carte" style={{ width: '18rem' }}>
  <Card.Img style={{width:"100%"}} variant="top" src= "./img1.png" />
  <Card.Body>
    <Card.Title style={{ textAlign:"center", fontSize: "20px", fontWeight:"bold"}}>Programme de bourses pour les femmes</Card.Title>
    <Card.Text>
    Le programme de bourses ELLEVATE de GOMYCODE vise à introduire plus de femmes tunisiennes dans le monde de la technologie, à les préparer à l'avenir et à leur donner un petit coup de pouce pour faciliter leur intégration dans le monde du travail.
    </Card.Text>
  </Card.Body>
</Card>

<Card className="carte" style={{ width: '18rem' }}>
  <Card.Img style={{width:"100%"}} variant="top" src= "./talan.jpg" />
  <Card.Body>
    <Card.Title style={{ textAlign:"center", fontSize: "20px", fontWeight:"bold"}}>Programme de bourses pour 1000 développeurs</Card.Title>
    <Card.Text>
    Ce programme vise à former les jeunes diplômés de l’enseignement supérieur tunisien sur le développement web 
en vue de faciliter leur intégration professionnelle.Ce programme s’adresse aux jeunes diplômés de l’enseignement supérieur qui veulent démarrer une carrière dans le numérique.
    </Card.Text>
  </Card.Body>
</Card>

<Card className="carte" style={{ width: '18rem' }}>
  <Card.Img style={{width:"100%"}} variant="top" src= "./img3.jpg" />
  <Card.Body>
    <Card.Title style={{ textAlign:"center", fontSize: "20px", fontWeight:"bold"}}>Programme de  bourses « Algerian Women in Tech »</Card.Title>
    <Card.Text>
    Gomycode lance « Algerian Women in Tech », la première bourse pour offrir aux femmes l’opportunité de s’approprier le futur grâce à l’accès à la technologie et forme déjà plusieurs centaines d’étudiants au développement informatique et aux nouvelles technologies comme l’intelligence artificielle et la data science à travers tout le pays.
    </Card.Text>
  </Card.Body>
</Card>
</div>

<ReactPlayer className="sequence" url='https://youtu.be/olJOZp57FWM' />
</div>
  );
}

export default App;
