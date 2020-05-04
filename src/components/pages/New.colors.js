import React, { Component } from 'react'
import { addColor } from '../../core/actions/colorsActions'
import { connect } from "react-redux";


 class AddColorForm extends Component {
   constructor(props){
     super(props)
     this.state = {
       name: '',
       colorValue: ''
     }
   }

  mySubmitHandler = (e) => {
    e.preventDefault()
    const { colors } = this.props
    const { name, colorValue } = this.state
    let colorDetails = {
      id: colors.length +1,
      name,
      value: colorValue
    }

    this.props.addColor(colorDetails)
    this.props.history.push('/colors')
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.mySubmitHandler}>
          <p>Color name: <input
            type='text'
            name='name'
            onChange={e => this.handleChange(e)}
            required
          /></p>
          <p>Color Value:<input
            type='color' 
            name="colorValue"
            onChange={e => this.handleChange(e)}
            required
            /></p>

          <br />
          <br />
          <input type='submit'
            label='Add color' />
        </form>
      </div>
    )

  }
}


const mapStateToProps = (state) => ({
  colors: state.colors.colors
})

export default connect(mapStateToProps, {addColor})(AddColorForm);






