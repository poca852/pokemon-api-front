import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../pages/home/HomeScreen'
import { Pokemon } from '../pages/pokemon/Pokemon';
import { WelcomeScreen } from '../pages/welcome/WelcomeScreen'
import { NuevoPokemon } from '../pages/nuevoPokemon/NuevoPokemon';

export const AppRouter = () => {
  return (
    <HashRouter>
      <div>


        <Switch>
          <Route exact path='/' component={WelcomeScreen} />
          <Route exact path='/home' component={HomeScreen} />
          <Route exact path='/nuevo' component={NuevoPokemon} />
          <Route exact path='/pokemon/:id' component={Pokemon} />
          <Redirect to='/' />
        </Switch>
      </div>
    </HashRouter>
  )
}
