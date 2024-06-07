import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FunnyGame from './progressBarGame';
import pros from './pros';

const reactLogos = ['triade-logo.png', 'react-logo.png', 'nodejs-logo.png'];

const root = ReactDOM.createRoot(document.getElementById('root'));

function Header(props) {
  return (
    <header>
      {props.listImg.map((image) => <img src={image} alt="logo"/>)}
    </header>
  )
}

function TagLine() {
  return (
    <div class='tagline'>
      <h1>React — это круто!</h1>
    </div>
  )
}

function Card(props) {
  const [flipped, setFlipped] = React.useState(false);
  const onClick = () => {
    setFlipped(true);
    props.onFlip();
  }
  return (
    <div class='card' onClick={onClick}>
      {flipped && <img src={props.icon} alt="icon"/>}
      <h2>{flipped ? props.head : "Открой меня!"}</h2>
      <p>{flipped ? props.text : "Я крутая фишка React!"}</p>
    </div>
  )
}

function CardRow(props) {
  const length = props.pros.length;
  const [flipCount, setFlipCount] = React.useState(0);

  const handleFlip = () => {
    setFlipCount(flipCount + 1);
  }

  return (
    <>
      <div class='card-row'>
        {props.pros.map((pro) => <Card head={pro.head} text={pro.text} icon={pro.icon} onFlip={handleFlip}/>)}
      </div>
      {(flipCount >= length) && <>
        <h4>
          Заинтересовались?<br/>Бегом изучать!!!
          <button><a href='https://react.dev'>Вперёд!</a></button>
          </h4>
      </>}
    </>

  )
}

function Teaser() {
  return (
    <div class='teaser'>
      <h3>Посмотрите, что может React!</h3>
    </div>
  )
}
root.render(
  <React.StrictMode>
    <Header listImg={reactLogos}/>
    <TagLine/>
    <CardRow pros={pros}/>
    <Teaser/>
    <FunnyGame/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
