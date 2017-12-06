import React , { Component } from 'react'
import { Table, Image,Icon, Card } from 'semantic-ui-react'
import teamobj from './teamsInfo.js'
export default class BowlingTable extends Component {
  handleItemClick(value){
this.props.setParent(value,!this.props.toggle)
  }
  render() {
    const {bowlingstats,sortparameter}=this.props

    const TableRows=bowlingstats.map((val,index)=>(
      <Table.Row key={index}>
        <Table.Cell>{index+1+'.'}</Table.Cell>
        <Table.Cell ><Image src={teamobj[val.team]["url"]} className="teamimage" size='mini' avatar/>{val.name}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='matchesplayed')?'#e8e8ee':'white'}}>{val["matches"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='overs')?'#e8e8ee':'white'}}>{val["overs"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='runs')?'#e8e8ee':'white'}}>{val["runs"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='wickets')?'#e8e8ee':'white'}}>{val["wickets"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='bf')?'#e8e8ee':'white'}}>{val["bf"]['wickets']+'/'+val["bf"]['runs']}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='avg')?'#e8e8ee':'white'}}>{val["avg"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='eco')?'#e8e8ee':'white'}}>{val["eco"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='sr')?'#e8e8ee':'white'}}>{val["sr"]}</Table.Cell>
      </Table.Row>
    ))
  return (
    <div>
    <h1>Bowling Stats</h1>
    <Table striped>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell><a >Pos </a></Table.HeaderCell>
        <Table.HeaderCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Player</Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='matchesplayed')?'#e8e8ee':'white'}}><a >Ins</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='overs')?'#e8e8ee':'white'}}><a >Overs </a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='runs')?'#e8e8ee':'white'}}><a >Runs</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='wickets')?'#e8e8ee':'white'}}><a>Wickets</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='bf')?'#e8e8ee':'white'}}><a>BBI</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='avg')?'#e8e8ee':'white'}}><a>Avg</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='eco')?'#e8e8ee':'white'}}><a>Econ</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='sr')?'#e8e8ee':'white'}}><a>SR</a></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {TableRows}
      </Table.Body>
    </Table>
    </div>
  )
}
}
