import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../chat';
import chatHead from '../images/Avatar-Icon.png';
import userHead from '../images/userT.png';
import styles from '../mystyle.module.css';
import AvatarMale from "../components/Avatar-Male";
import AvatarFemale from "../components/Avatar-Female";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
//import Animation from '../AnimatedCircles';
import { BiSend } from 'react-icons/bi';
import { BiMicrophone } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { motion } from "framer-motion";
import { useSpeechSynthesis } from 'react-speech-kit';
import PageTransition from "./PageTransition";
import StarRating from "./Rating/StarRating";

class Chatbot extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '', 
      colour: 'black', 
      avatar: 'robot', 
      eyes_scaleY: 1, 
      eyes_translateY: 1,
      mouth_scaleY: 1,
      mouth_duration: 0,
      eyesBrows_translateY: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Function which is called everytime the whole component has an update
  componentDidUpdate = () => {
    this.scrollToTop();
  }

  // Function which is called on enter or "Send Query" button press,
  // is used to 1) Check message isnt blank, 2) Send message, 3)
  // reset query to be blank
  handleSubmit(event) {
    event.preventDefault();

    const { query } = this.state;
    const { sendMessage } = this.props;

    if (query.trim() === "") {
      alert("Query must not be blank!");
      return;

    } else {
      sendMessage(query);
      this.setState({ query: "" });
      event.preventDefault();
    }
  }

  // Function which is called anytime a character is added into the query box
  // which updates the current query state to be sent to the chatbot
  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  // Function which updates the box with messages to show the most recent message at the
  // bottom of the screen.
  scrollToTop() {
    var element = document.getElementById("messageBox");
    element.scrollTop = element.scrollHeight;
  }

  // Function which sets the date when a new message is processed
  setDateFunction(entry) {
    if(entry.date == null) {
      entry.date = new Date();
    }

    var minutes = entry.date.getMinutes();

    if(minutes < 10) minutes = "0" + minutes;

    var hours;

    if(entry.date.getHours() > 12) {
      hours = entry.date.getHours() % 12 || 12;
      entry.date = hours + ":" + minutes + "pm";
    } else {
      hours = entry.date.getHours();
      entry.date = hours + ":" + minutes + "am";
    }
  }

  render() {
    const { messages } = this.props;
    const { data } = this.props.location;
    let avatarName;
    let shownAvatar;
    var counter = 0;

    if(data === "Cassy") {
      shownAvatar = <AvatarFemale eyes_scaleY = {this.state.eyes_scaleY} 
        eyes_translateY = {this.state.eyes_translateY} 
        width = "60%"
        mouth_scaleY = {this.state.mouth_scaleY}
        mouth_duration = {this.state.mouth_duration}
        eyesBrows_translateY = {this.state.eyesBrows_translateY}> 
      </AvatarFemale>;

      avatarName = "Cassy";
    } else {
      shownAvatar = <AvatarMale eyes_scaleY = {this.state.eyes_scaleY} 
        eyes_translateY = {this.state.eyes_translateY} 
        width = "60%"
        mouth_scaleY = {this.state.mouth_scaleY}
        mouth_duration = {this.state.mouth_duration}
        eyesBrows_translateY = {this.state.eyesBrows_translateY}>
      </AvatarMale>;

      avatarName = "Alex"
    }

    const Mic = () => {
      const { transcript } = useSpeechRecognition();

      if(!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      }

      const mouseUpFunction = () => {
        this.setState({ query: transcript });
        SpeechRecognition.stopListening();
        this.scrollToTop();
        this.setState({ colour: "black" });
      }

      const mouseDownFunction = () => {
        SpeechRecognition.startListening();
        this.setState({ colour: "red" });
      }

      return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={ styles.buttonStyle } onMouseDown={ mouseDownFunction }
        onMouseUp={ mouseUpFunction }><BiMicrophone size="30px" color={ this.state.colour } style={{ marginBottom: "20px" }}/></motion.button>
      )
    }

    const Speech = (speech) => {
      const { speak, voices } = useSpeechSynthesis();
      let voice;

      if(data === "Cassy") {
        voice = voices[1];
      } else {
        voice = voices[0];
      }

      return (
        <button className={ styles.buttonStyle } onClick={() => speak({ text: speech.speech, voice: voice })}><BsFillPlayFill size="20px" color="white"/></button>
      );
    }

    return (
      <div>
        { shownAvatar }
        <motion.div initial = "out" animate ="in"  exit = "out" variants = { PageTransition }>
          <motion.div 
            //popup animation
            intial = {{ opacity : 0, scale : 0 }} 
            animate = {{ opacity : 1, scale : 1.1 }}
            transition={{ duration: 1 }}
            className={ styles.chatWindowStyle }>
            <div>              
              <ul className={ styles.queryBoxStyle } id="messageBox">
                { messages.map(entry => {
                  if(entry.date == null) {
                    this.setDateFunction(entry, messages.length);
                  }

                  counter++;

                  if(entry.sender === "user") {
                    return <div key={ counter }><img src={ userHead } alt='user' className={ styles.imgStyleSmall } >
                      </img><ul className={ styles.userStyle } ><li className={ styles.titleStyleSmall }>User{ entry.date }<Speech speech={ entry.text}/></li>
                      <br />{ entry.text }</ul></div>;
                  } else {
                    if(counter === messages.length) {
                      return <div key={ counter }><img src={ chatHead } alt='chatbot' className={ styles.imgStyle }>
                        </img><ul className={ styles.chatbotStyleBig } ><li className={ styles.titleStyle }>{ avatarName } { entry.date }<Speech speech={ entry.text }/></li>
                        <br />{ entry.text }</ul></div>;
                    } else {
                      return <div key={ counter }><img src={ chatHead } alt='chatbot' className={ styles.imgStyleSmall }>
                        </img><ul className={ styles.chatbotStyle } ><li className={ styles.titleStyleSmall}>{ avatarName } { entry.date }<Speech speech={ entry.text }/></li>
                        <br />{ entry.text }</ul></div>;
                    }
                  }
                })}
              </ul>

              <form className={ styles.inputBoxStyle } onSubmit={ this.handleSubmit }>
                <textarea onKeyDown={ (e) => { if(e.keyCode === 13) this.handleSubmit(e); }}
                  style={{ width: "220px", height: "30px", overflowWrap: "break-word", resize: "none" }}
                  type='text' placeholder='Enter Query!' onChange={ this.handleChange }
                  value={ this.state.query } className={ styles.fontChoice }
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick = {() => {this.setState({
                    eyes_scaleY: 0.5, 
                    eyes_translateY: 17,
                    mouth_scaleY: 0,
                    mouth_duration: 1,
                    eyesBrows_translateY: 17
                  })}}
                  className={ styles.buttonStyle } >
                  <BiSend size="30px" color="#61658B" style={{ marginBottom: "20px"}}/>
                </motion.button>
                <Mic />
              </form>
            <StarRating> </StarRating>
            </div>
          </motion.div>
        </motion.div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state
});

export default connect(mapStateToProps, { sendMessage })(Chatbot);