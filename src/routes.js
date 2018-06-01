import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/Homepage';
import AboutPage from './components/about/Aboutpage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="about" component={AboutPage}/>
  </Route> 
);