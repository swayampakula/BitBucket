import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router';
export default class NavBar extends Component {
  state = {activeItem:"All Time Records"}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    var years=[];
    for (var i = 8; i >=0; i--) {
      years.push(2008+i)
    }
     years=years.map((val)=>(
       <Link key={val} to={'/year/'+val}>
          <Menu.Item
              name={val.toString()}
              active={activeItem == val}
              content={val}
              onClick={this.handleItemClick}
            />
            </Link>
          ))
    return (
      <Menu>
      <Link to='/AllTimeRecornds'>
        <Menu.Item
          name='All Time Records'
          active={activeItem === 'All Time Records'}
          content='All Time Records'
          onClick={this.handleItemClick}
        />
        </Link>
        {years}
      </Menu>
    )
  }
}
