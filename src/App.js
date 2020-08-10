import React, {Component} from 'react';
import * as firebase from 'firebase'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasAccount: false,
      name: '',
      key: '',
      value: '',
      data: {}
      }
    }
    componentDidMount(){
      const db = firebase.database();
      const surname = db.ref('surname')
      surname.on('value', (elem) => this.setState({
        data: elem.val()
      }))
    }
    handleChange = ({target : { value, id}}) => {
      this.setState({
        [id] : value,
      })
    }
  

  createAccount = () => {
    const {email,password} = this.state;
    // firebase.auth().createUserWithEmailAndPassword(email,password)
    // .catch(error => console.log(error))

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( response => {
       this.setState({hasAccount: true})
    })
    .catch(error => console.log(error))
}

  sendData = () => {
    const {key, value} = this.state;
    const db = firebase.database();
    db.ref(key).push(value);
    alert('yur data was written to db')
  }

  render(){
    const { hasAccount,  data ,name } = this.state;
    return(
      <div>
        {
         hasAccount ? 
         (
          <div>
            <input 
               type = 'text'
               id = "key"
               placeholder = "enter key"
               onChange = {this.handleChange}/>
            <input 
               type = 'text'
               id = "value"
               placeholder = "enter value"
               onChange = {this.handleChange}/> 
            <input 
               type = "submit" 
               onClick = {this.sendData}/> 
               {
                 Object.keys(data).map(elem => (
                   <div>
                     {data[elem]}
                   </div>
                 ))
               }           
          </div>
        )
        :
        (<div className = 'login_block'>
          <input 
             type = "text" 
             id = "email" 
             placeholder = "email" 
             onChange = {this.handleChange}/>
          <input 
             type = "password" 
             id = "password" 
             placeholder = "password" 
             onChange = {this.handleChange}/>
          <input 
             type = "submit" 
             onClick = {this.createAccount}/>
        </div>
        )
      }
      </div>
    )
  }
}

