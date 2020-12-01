import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import style from './style.css';
import { Row, Col } from 'antd';
import Cards from './components/card';
import Button from './elements/Button';

const { Header, Content, Footer } = Layout;

const Tampilan = () => {
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Kelompok 43</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Button href="/signin">Sign In</Button>
                                <Button href="/signup">Sign Up</Button>
                            </div>
                        </Col>
                    </Row>
                </Menu>

            </Header>
                <div className="site-layout-content">
                    <div className="Components">
                        <Cards />;
                    </div>
                </div>
        </Layout>
    );
};

export default Tampilan;