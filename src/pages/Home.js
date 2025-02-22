import React from 'react';
import { Layout, Carousel } from 'antd';
import pic1 from '../assets/images/logo_main_2.PNG';
import pic2 from '../assets/images/pic_A.PNG';
import pic3 from '../assets/images/pic_D.PNG';

const { Content } = Layout;

const Home = () => {
  const headerHeight = 64; // 根据实际 Header 高度调整
  const footerHeight = 80; // 根据实际 Header 高度调整
  const carouselItems = [
    pic1,
    pic2,
    pic3
  ];

  return (
    <Layout
      style={{
        minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Content
        style={{
          flex: 1,
          padding: '24px',
          backgroundColor: '#000'
        }}
      >
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
                <h3
                  style={{
                    color: '#fff',
                    fontSize: '36px',
                    position: 'absolute'
                  }}
                >
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </Content>
    </Layout>
  );
};

export default Home;
