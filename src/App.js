import logo from './logo.svg';
import './App.css';
import UsersLoader from './components/UsersLoader';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SignInForm from './components/SignInForm';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Clock/Counter';
import StopWatch from './components/Clock/StopWatch';
import Clock from './components/Clock';
import WindowSize from './components/WindowSize';
import PageNotFound from './components/PageNotFound';

class MyList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section>
        <h2>List of something</h2>
        <ul>{this.props.children}</ul>
      </section>
    )
  }
}
class MyItem extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <li>{title}</li>
    )
  }
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignInForm />} />
        <Route path='/users' element={<UsersLoader />} />
        <Route path='/windowSize' element={<WindowSize />} />
        <Route path='/clock/' element={<Clock />}>
          <Route path='counter' element={<Counter />} />
          <Route path='stopWatch' element={<StopWatch />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      {/* <MyList >
        <MyItem title="title#1" />
        <MyItem title="title#2" />
        <MyItem title="title#3" />
      </MyList> */}
    </>
  );
}

export default App;
