import React from 'react';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterLinkList,
} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';

const App = () => (
  <div>
    <Layout fixedHeader>
      <Header
        className="header-color"
        title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Profile</Link>}
      >
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Profile</Link>}>
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
      <Content>
        <Main />
      </Content>
      <Footer size="mini">
        <FooterSection type="left" logo="Title">
          <FooterLinkList>
            <p>Help</p>
            <p>Privacy & Terms</p>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </Layout>
  </div>
);

export default App;
