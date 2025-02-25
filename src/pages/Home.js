import React, { useState, useEffect } from 'react';
import { Layout, Carousel, List, Typography, Button, Space, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import pic1 from '../assets/images/logo_main_2.PNG';
import pic2 from '../assets/images/pic_A.PNG';
import pic3 from '../assets/images/pic_D.PNG';

const { Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
    const navigate = useNavigate();
    const headerHeight = 64; // 根据实际 Header 高度调整
    const footerHeight = 80; // 根据实际 Footer 高度调整
    const carouselItems = [pic1, pic2, pic3];

    const [latestArticles, setLatestArticles] = useState([]);

    // 获取最新 5 篇文章
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:8080/articles', {
                    params: { page: 1, size: 5 }
                });
                setLatestArticles(response.data.articles);
            } catch (error) {
                console.error('获取最新文章失败', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <Layout
            style={{
                minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
                backgroundColor: '#000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Content
                style={{
                    flex: 1,
                    padding: '24px',
                    backgroundColor: '#000',
                    width: '100%',
                    maxWidth: '1200px'
                }}
            >
                {/* 轮播图 */}
                <Carousel autoplay>
                    {carouselItems.map((src, index) => (
                        <div key={index}>
                            <div
                                style={{
                                    height: '400px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`幻灯片 ${index + 1}`}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </Carousel>

                {/* 最新情报模块 */}
                <Card
                    title={<Title level={3} style={{ margin: 0, color: '#fff' }}>最新情报</Title>}
                    extra={
                        <Button type="link" style={{ color: '#1890ff' }} onClick={() => navigate('/articles')}>
                            详情
                        </Button>
                    }
                    bordered={false}
                    style={{
                        marginTop: 24,
                        backgroundColor: '#1e1e1e',
                        color: '#fff'
                    }}
                >
                    <List
                        dataSource={latestArticles}
                        renderItem={(article) => (
                            <List.Item
                                style={{
                                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                                    padding: '12px 0',
                                    cursor: 'pointer'
                                }}
                                onClick={() => navigate(`/article/${article.id}`)}
                            >
                                <Space direction="vertical">
                                    <Text style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff' }}>
                                        {article.title}
                                    </Text>
                                    <Text type="secondary" style={{ fontSize: '14px', color: '#aaa' }}>
                                        {new Date(article.createdAt).toLocaleString()}
                                    </Text>
                                </Space>
                            </List.Item>
                        )}
                    />
                </Card>
            </Content>
        </Layout>
    );
};

export default Home;
