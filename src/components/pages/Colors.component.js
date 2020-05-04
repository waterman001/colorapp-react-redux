import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    const { colors } = this.props
    return (
      <div>
        <h4>Welcome to color factory.</h4>
        <ul>
          <li>
            <Link to='/colors/new'>Add a Color </Link>
          </li>
        </ul>

        <p>Pls select a color:</p>
        <ul>
          {
            colors.map((color) => (
              <li key={color.id}>
                <Link to={`/colors/${color.name}`}>{color.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  colors: state.colors.colors
})

export default connect(mapStateToProps, {})(Colors);