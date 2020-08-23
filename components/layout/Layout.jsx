import { Layout, Menu } from 'antd'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';

const { header, Content, footer, Sider } = Layout;

export default (props) => {

    const [session, loading] = useSession()

    useEffect(() => {
        if (props.protected) {
            if (!session && !loading) signIn()
        }
    })

    return (
        <Layout>
            <Header />
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div>
                    {props.children}
                </div>
            </Content>
            <span><Footer /></span>
        </Layout>
    )
}