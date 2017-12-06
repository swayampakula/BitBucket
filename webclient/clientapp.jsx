import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRedirect,IndexRoute,Router, Route, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import NavBar from './components/navbar.jsx'
import AllTimeRecords from './components/alltimerecords.jsx'
import MainComp from './components/maincomp.jsx';
import YearWiseRecords from './components/yearwiserecords';
import AllTimeBattingStats from './components/alltimebattingstats.jsx'
import YearWiseBattingStats from './components/yearwisebattingstats.jsx'
import AllTimeBowlingStats from './components/alltimebowlingstats.jsx'
import YearWiseBowlingStats from './components/yearwisebowlingstats.jsx'

import { Sidebar, Segment, Button, Menu, Image, Icon, Header,Grid } from 'semantic-ui-react'
ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path ="/" component={MainComp}>
				<IndexRedirect to="/AllTimeRecornds" />
				<Route path="/AllTimeRecornds" component={AllTimeRecords} />
				<Route path="/year/:year" component={YearWiseRecords} />
        <Route path="/AllTimeBowlingStats/:sortparameter" component={AllTimeBowlingStats} />
        <Route path="/YearWiseBowlingStats/:year/:sortparameter" component={YearWiseBowlingStats} />
        <Route path="/YearWiseBattingStats/:year/:sortparameter" component={YearWiseBattingStats} />
        <Route path="/AllTimeBattingStats/:sortparameter" component={AllTimeBattingStats} />
			</Route>
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);
