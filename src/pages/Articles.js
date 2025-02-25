import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// 🔥 定义背景渐变动画
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 🔥 页面容器
const Container = styled.div`
    min-height: 100vh; /* 页面填满屏幕 */
    background-color: #121212;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
`;

// 🔥 文章列表
const ArticleList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    max-width: 600px;
`;

// 🔥 文章项
const ArticleItem = styled.li`
    background: #1e1e1e;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
    animation: ${fadeIn} 0.5s ease-in-out;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.2);
    }
`;

// 🔥 文章标题
const ArticleTitle = styled(Link)`
    text-decoration: none;
    color: #ffcc00;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
        color: #ff9900;
    }
`;

// 🔥 作者 & 日期
const ArticleMeta = styled.p`
    font-size: 14px;
    color: #aaa;
    margin-top: 5px;
`;

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/articles")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <Container><p>加载中...</p></Container>;
    if (error) return <Container><p>发生错误: {error}</p></Container>;

    return (
        <Container>
            <h2>文章列表</h2>
            <ArticleList>
                {articles.map(article => (
                    <ArticleItem key={article.id}>
                        <ArticleTitle to={`/article/${article.id}`}>{article.title}</ArticleTitle>
                        <ArticleMeta>
                            作者: {article.author} | {new Date(article.createdAt).toLocaleString()}
                        </ArticleMeta>
                    </ArticleItem>
                ))}
            </ArticleList>
        </Container>
    );
}

export default Articles;
