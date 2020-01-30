import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Main from '../pages/main'
import Event from '../pages/event'
import Calendario from '../pages/calendar'

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/event' component={Event} />
            <Route path='/calendario' component={Calendario} />
        </Switch>
    )
}
