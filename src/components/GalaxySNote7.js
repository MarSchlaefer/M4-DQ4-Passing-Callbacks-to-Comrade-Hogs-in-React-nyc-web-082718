import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        panicked: false
      }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
  }

  relax = () => {
    // console.log('hit relax')
    // if (this.props.environment === 'inhospitable') {
    //   setTimeout(() => {
    //     this.setState({
    //       environment: 'docile'
    //     })
    //   }, 2000
    //   )
    // }
  }


  exclaim = () => {
    console.log('hit the exclaim')
    this.exclaimAudio.play()
    this.squeelAudio.play()
  }

  setPanick = () => {
    if(this.state.panicked === false){
      this.setState({
        panicked: true
      })
    } else {
      return null
    }
    this.props.relax
  }


  panic = () => {
    this.exclaim()
    return <img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />
  }

  render() {
    return(
      <div id="galaxy-s-note" onClick={() => this.props.setEnvironment('inhospitable')}>
        {this.props.environment === 'inhospitable'? this.setPanick() : null}
        {this.state.panicked? this.panic() : null}
        // {this.relax()}
      </div>
    )
  }
}
