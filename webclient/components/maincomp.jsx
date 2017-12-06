import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header,Grid } from 'semantic-ui-react'
import NavBar from './navbar.jsx'
import {Link} from 'react-router';

export default class MainComp extends React.Component {
  render() {
    const {year,sortparameter} =this.props.params
    const {location}=this.props
    var batlinkObj,balllinkObj,alltimeobj;
    console.log(this.props,location);

    if(year==undefined)
      {
      alltimeobj='/AllTimeRecornds'
      batlinkObj='/AllTimeBattingStats/'
      balllinkObj='AllTimeBowlingStats/'
      }
    else {
      alltimeobj='/year/'+year
      balllinkObj='/YearWiseBowlingStats/'+year+'/'
      batlinkObj='/YearWiseBattingStats/'+year+'/'
    }
    return(
      <div >
      <NavBar/>

  <Grid>
  <Grid.Column width={3} >
  <Menu inverted pointing vertical>
  <Link to={alltimeobj}>
  <Menu.Item name='gamepad' active={sortparameter==undefined}>
    <a>Point Table</a>
  </Menu.Item>
  </Link>
    <Menu.Item  name='home'>
      <span style={{fontWeight:'800'}}>Batting</span>
    </Menu.Item>
    <Link to={batlinkObj+'matchesplayed'}>
    <Menu.Item active={sortparameter=='matchesplayed'} name='gamepad'>
    <a>Most Innings Batted</a>
    </Menu.Item>
    </Link>
    <Link to={batlinkObj+'runs'}>
    <Menu.Item name='camera' active={sortparameter=='runs'}>
    <a>Most Runs Scored</a>
    </Menu.Item>
    </Link>
    <Link to={batlinkObj+'highestScore'}>
    <Menu.Item name='home' active={sortparameter=='highestScore'}>
    <a>Highest Score</a>
    </Menu.Item>
    </Link>
    <Link to={batlinkObj+'avg'}>
    <Menu.Item name='gamepad' active={sortparameter=='avg'&&this.props.location.pathname.includes('Bat')}>
      <a>Best Average</a>
    </Menu.Item>
    </Link>
    <Link to={batlinkObj+'strikerate'}>
    <Menu.Item name='camera' active={sortparameter=='strikerate'}>
      <a>Highest Strikerate</a>
    </Menu.Item>
    </Link>
    <Link to={batlinkObj+'100s'}>
    <Menu.Item name='home' active={sortparameter=='100s'}>
    <a>Most Hundreds</a>
    </Menu.Item>
    </Link>
    <Link to={batlinkObj+'50s'}>
    <Menu.Item name='gamepad' active={sortparameter=='50s'}>
      <a>Most Fifties</a>
    </Menu.Item>
    </Link>
    <Link to={batlinkObj+'6s'} >
    <Menu.Item name='camera' active={sortparameter=='6s'}>
    <a>Most Sixes</a>
    </Menu.Item>
    </Link>
    <Link to={batlinkObj+'4s'}>
    <Menu.Item name='camera' active={sortparameter=='4s'}>
    <a>Most Fours</a>
    </Menu.Item>
    </Link>
    <Menu.Item name='home'>
      <span style={{fontWeight:'800'}}>Bowling</span>
    </Menu.Item>

    <Link to={balllinkObj+'wickets'}>
    <Menu.Item name='gamepad' active={sortparameter=='wickets'}>
      <a>Most Wickets</a>
    </Menu.Item>
    </Link>
    <Link to={balllinkObj+'bf'}>
    <Menu.Item name='camera' active={sortparameter=='bf'}>
    <a>Best Figures</a>
    </Menu.Item>
    </Link>
    <Link to={balllinkObj+'avg'}>
    <Menu.Item name='gamepad' active={sortparameter=='avg'&&this.props.location.pathname.includes('Bowl')}>
      <a>Best Average</a>
    </Menu.Item>
    </Link>
    <Link to={balllinkObj+'sr'}>
    <Menu.Item name='camera' active={sortparameter=='sr'}>
      <a>Best Strikerate</a>
    </Menu.Item>
    </Link>
    <Link to={balllinkObj+'eco'} >
    <Menu.Item name='home' active={sortparameter=='eco'}>
    <a>Best economy</a>
    </Menu.Item>
    </Link>
  </Menu>
    </Grid.Column>
        <Grid.Column width={13}>
            {this.props.children}
        </Grid.Column>
  </Grid>
      </div>
    );
  }
}
