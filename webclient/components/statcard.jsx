import React , { Component }  from 'react';
import { Grid, Image, Segment,Button,Icon } from 'semantic-ui-react';
import teamsInfo from './teamsInfo.js';
import {Link} from 'react-router';
export default class StatCard extends Component {

    render() {
      const {statsobj,location,type}=this.props;
        var typeobj={
          runs:'ORANGE CAP',
          '6s':'MOST SIXES',
          'highestScore':'HIGHEST SCORE',
          'strikerate':'BEST BATTING STRIKE RATE',
          wickets:'PURPLE CAP',
          'bf':'BEST FIGURES',
          'avg':'BEST AVERAGE',
          'eco':'BEST ECONOMY'
        }
        var typeabobj={
          runs:'runs',
          '6s':'sixes',
          'highestScore':'score',
          'strikerate':'strike rate',
          wickets:'wickets',
          'bf':'bf',
          'avg':'avg',
          'eco':'eco'
        }
        var linkobj;
        if(location=='All Times')
        {
          if(type=='batting')
            linkobj='AllTimeBattingStats'
          else {
            linkobj='AllTimeBowlingStats'
          }
        }
        else {
          if(type=='batting')
            linkobj='/YearWiseBattingStats'+'/'+location
          else {
            linkobj='/YearWiseBowlingStats'+'/'+location
        }
      }
        const gridstats=  Object.keys(statsobj).map((val)=>{
          var teamUrl='http://www.iplt20.com/resources/ver/i/stats-bgs/'+teamsInfo[statsobj[val][0]['team']]['ab']+'.png'
        var fullname =(teamsInfo[statsobj[val][0]['name']]==undefined)?teamsInfo['missing']:teamsInfo[statsobj[val][0]['name']];
        console.log(fullname);
        var name=statsobj[val][0]['name'].split(' ')
      return (    <Grid.Column>
        <div className='stat-card' style={{
        backgroundImage:"url("+teamUrl+")",backgroundColor:(typeobj[val]=='ORANGE CAP')?'#dd7b0d':(typeobj[val]=='PURPLE CAP')?'#794996':'#163072'}}>
        <div>
        <h5 className='stat-cap' >
        {typeobj[val]}</h5>
        </div>
          <div className='stat-image-div' >
    <Image className='stat-image' src={fullname} />
        </div>
        <div className='stat-div' >
        <h7 className='stat-fn' >{name.shift()} </h7>
        <h2 className='stat-ln'>{name} </h2>
        <Image className='stat-team-img'  src={teamsInfo[statsobj[val][0]['team']]['url']} size='mini'/>
        <span className='stat-team-name'>{teamsInfo[statsobj[val][0]['team']]['ab']}</span>
        </div>
        <div className='stat-stats-div' >
        <div className='stat-stats'>
        <h7> {typeabobj[val]}</h7>
        <h1 className='stat-stats-val'>{(val!='bf')?statsobj[val][0][val]:statsobj[val][0]['bf']["wickets"]+"/"+statsobj[val][0]['bf']['runs']}</h1>
        </div>
        </div>
        </div>
        <div className='leaderChart'>
          <div className='leaderChart_inner'>
          <div className='pos'>2.
          </div>
          <div className='leaderChart__content'>
          <h1>{statsobj[val][1]['name']} </h1>
          <div className="stat"><strong>{(val!='bf')?statsobj[val][1][val]:statsobj[val][1]['bf']["wickets"]+"/"+statsobj[val][1]['bf']['runs']}</strong> {(val!='strikerate')?typeabobj[val]:""}</div>
          <Image className='leaderChart_image'  src={teamsInfo[statsobj[val][1]['team']]['url']} size='mini'/>
          <h2>{teamsInfo[statsobj[val][1]['team']]['ab']}</h2>
          </div>
        </div>
        </div>
        <div className='leaderChart'>
          <div className='leaderChart_inner'>
          <div className='pos'>3.
          </div>
          <div className='leaderChart__content'>
          <h1>{statsobj[val][2]['name']} </h1>
          <div className="stat"><strong>{(val!='bf')?statsobj[val][2][val]:statsobj[val][0]['bf']["wickets"]+"/"+statsobj[val][0]['bf']['runs']}</strong> {(val!='strikerate')?typeabobj[val]:""}</div>
          <Image className='leaderChart_image'  src={teamsInfo[statsobj[val][2]['team']]['url']} size='mini'/>
          <h2>{teamsInfo[statsobj[val][2]['team']]['ab']}</h2>
          </div>
        </div>
        </div>
        <div className='leaderChart_button_div'>
        <Link  to={linkobj+'/'+val}>
          <Button  className='leaderChart_button'>
              <span style={{float:'left'}}> View Full List</span> <Icon style={{float:'right'}} name='users' />
          </Button>
        </Link>
        </div>
      </Grid.Column>
      )
      })

      return(
  <Grid stackable columns={4}>
  {gridstats}
  </Grid>

)}
}
