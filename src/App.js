import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';




const sounds=[

{
  key:'Q',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
},
{
  key:'W',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
},
{
  key:'E',
  mp3:  'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
},
{
  key:'A',
  mp3:  'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
},
{
  key:'S',
  mp3:  'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
},
{
  key:'D',
  mp3:  'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
},
{
  key:'Z',
  mp3:  'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
},
{
  key:'X',
  mp3:   'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
},
{
  key:'C',
  mp3:   'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}

]


class App extends Component {
  render(){
    return(

      <div className='main'>
          <h2 className='head'>Drum Machine<br />
          Click keys to Play & enjoy!</h2>
      <div id='drum-machine' >
        {sounds.map((sound,idx)=>(
          <Box text={sound.key} keys={idx} audio={sound.mp3} />
        ))}
      
      </div>
      </div>
  
    )
  }
}



class Box extends Component {
  constructor(props){
    super(props);

      this.audio = React.createRef();
  }

  soundPlay=()=>{
   console.log(this.audio.current);
    this.audio.current.play();

    const id= this.audio.current.id;
    const parent= this.audio.current.parentNode;

    const display = parent.parentNode;
    display.querySelector('h1').innerText=id;
  }

  render(){

    const {text,audio }=this.props;

    return(

      <div id='display' className='drum-pad' onClick={this.soundPlay}>
        <h1 className='h1'></h1>
      {text}
      <audio ref={this.audio} src={audio} className='clip' id={text} />
    </div>
    )
}



};
 
  // javascript
document.addEventListener('keydown',(e) =>{
  const id= e.key.toUpperCase();
  const audio = document.getElementById(id);


  if(audio){
  
    const parent = audio.parentNode;
    parent.classList.add('active')
    audio.play();

    audio.addEventListener('ended',()=>{
      parent.classList.remove('active')
    })

   
  }
})




export default App;
