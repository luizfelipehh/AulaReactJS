import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { isAutenticado } from '../Utils/LoginManager';

const PrivateRoute = (props) => {
    const { component: Component, ...others} = props; //desestruturando...., por causa que o react obriga que a tag <Component> seja com "C" maiusculo
    return(
        <Route {...others} //... = spedoperator js
          render={propsRender => {
              return isAutenticado()
                  ?<Component {...propsRender}/>
                  :<Redirect to={{
                      pathname: '/login',
                      state: { from: propsRender.location }
                  }} />
              
          }}

        />
    )
};

export default PrivateRoute;