import React from 'react';

function FunnyGame() {
    const [userValue, setUserValue] = React.useState(50);
    const [isPending, setIsPending] = React.useState(false);
    const onChange = (e) => {
      const value = e.target.value;
      if (value >= 0 && value <= 100) {
        setIsPending(false);
        setUserValue(value);
      }
      if (value == '') {
        setIsPending(true);
      }
    }
    return (
      <div class='game'>
        <label>
          Процент заполнения:
          <input type="number" min="0" max="100" value={userValue} onChange={onChange}/>
        </label>
        <FunnyBlock progress={userValue} pending={isPending}/>
      </div>
    )
  }
  
  function FunnyBlock(props) {
    return (
      <div class="block">
        <div class="progress" style={{width: `${props.pending ? '100' : props.progress}%`, background: `${props.pending ? 'red' : '#4CAF50'}`}}></div>
      </div>
    )
  }

    export default FunnyGame;
