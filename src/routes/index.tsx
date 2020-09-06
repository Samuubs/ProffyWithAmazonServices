import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import Login from '../pages/Login';
import Register from '../pages/Register';

import TeacherRoute from './TeacherRoute';
import GenericRoute from './GenericRoute';
import StudentRoute from './StudentRoute';

const Routes: React.FC = () => {    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <GenericRoute path="/" exact component={Landing} />
                <StudentRoute path="/study" component={TeacherList} />
                <TeacherRoute path="/give-classes" component={TeacherForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
