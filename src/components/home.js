import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { Layout, Menu, Row, Col } from 'antd';

import './index'

const Home = ({ children, selectedTab }) => {
  const { Header, Footer, Content } = Layout;

  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <div>
          {/* SET <HEAD> CONTENT HERE */}
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}>
            <html lang="en" />
          </Helmet>

          {/* PAGE LAYOUT */}
          <Layout className="layout" style={{ height: '100%', minHeight: '100vh' }}>

            {/* NAVBAR */}
            <Header style={{ width: '100%', paddingLeft: '25px' }}>
              <div className="logo" style={{
                width: 'auto',
                height: 64,
                lineHeight: '64px',
                paddingRight: '25px',
                float: 'left'
              }}>

                {/* TEXT / IMAGE LOGO */}
                <h2 style={{ height: 64, color: 'white' }}>Gatsby Ant UI</h2></div>

              {/* LINK MENU */}
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[selectedTab || "1"]}
                style={{ lineHeight: '64px' }}>
                <Menu.Item key="1" onClick={() => navigate('/')}>
                  Home
                </Menu.Item>
                <Menu.Item key="2" onClick={() => navigate('/about')}>
                  About
                </Menu.Item>
              </Menu>
            </Header>

            {/* YOUR PAGE CONTENT GOES HERE */}
            <Content>
              <Row style={{ padding: '1em 1.5em 1em 1.5em' }}>
                <Col span={24}>
                  {children}
                </Col>
              </Row>
            </Content>

            {/* FOOTER */}
            <Footer style={{ textAlign: 'center' }}>
              Gatsby Ant Design Starter ©2018 Created by <a href='https://github.com/petercunha'>Peter Cunha</a>
            </Footer>
          </Layout>
        </div >
      )}
    />
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home
