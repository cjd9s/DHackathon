import React from 'react';
import { Flex, Box } from 'rimble-ui'
import { BN } from 'bn.js'
import Web3 from "web3";
import { Link } from 'rimble-ui';
import { Button } from 'rimble-ui';
import { Input } from 'rimble-ui';


export default class Popup extends React.Component {
  state = {
  }

  componentDidMount() {
    this.props.inputsConfig.map( config => {
      this.setState(prevState => ({
        ...prevState,
        [config.name]: null,
      }))
    })
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log("change handled: ", name, value)
    this.setState((prevState) => (
      Object.assign(prevState, {[name]: value})
    ))
  }

  render() {
    return (  
      <Flex style={styles.popup}>  
        <div style={styles.popup_inner}>  
          <h2 style={styles.items} >{this.props.text}</h2>
            {this.props.inputsConfig.map( config => {
              return (
              <Box key={config.name}>
                <span>{config.displayName} </span>
                <Input
                  name={config.name}
                  type={config.type}
                  required={true}
                  placeholder={config.placeholder}
                  value={this.state[config.name] ? this.state[config.name] : ""}
                  onChange={this.handleChange}
                  min="0"
                  step="0.01"
                />
              </Box>)
              })
            }
          <Button onClick={() => this.props.submitFn(this.state) } icon="Send" iconpos="right">Submit Tx </Button>
        </div> 
      </Flex>
    );  
  }  
}

const styles = {
  "popup": {
    "position":"fixed",
    "width":"100%",
    "height":"100%",
    "top":"0",
    "left":"0",
    "right":"0",
    "bottom":"0",
    "margin": "auto",
    "backgroundColor":"rgba(0,0,0, 0.3)"
  },
  "popup_inner": {
    "position":"absolute",
    "left":"25%",
    "right":"25%",
    "top":"25%",
    "bottom":"25%",
    "margin":"auto",
    height: "auto",
    width: '60%',
    borderRadius: 10,
    "background":"white",
    "padding": "20px",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  items: {}
}