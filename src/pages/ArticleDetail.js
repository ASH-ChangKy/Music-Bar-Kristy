import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import parse from "html-react-parser";
import edjsHTML from "editorjs-html"; // ✅ 解析 EditorJS JSON

const edjsParser = edjsHTML(); // ✅ 初始化 EditorJS 解析器

// 🔥 淡入动画
const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

// 🔥 页面容器
const Container = styled.div`
    min-height: 100vh;
    background-color: #121212;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
`;

// 🔥 文章内容框
const ArticleWrapper = styled.div`
    background: #1e1e1e;
    border-radius: 10px;
    padding: 30px;
    max-width: 800px;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
    animation: ${fadeIn} 0.5s ease-in-out;
`;

// 🔥 标题
const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 10px;
    color: #ffcc00;
`;

// 🔥 作者 & 时间
const Meta = styled.p`
    font-size: 14px;
    color: #aaa;
    margin-bottom: 20px;
`;

// 🔥 文章正文（支持富文本）
const Content = styled.div`
    font-size: 16px;
    line-height: 1.8;
    color: #ddd;
    text-align: justify;

    h1, h2, h3, h4, h5, h6 {
        color: #ffcc00;
        margin-top: 20px;
    }

    a {
        color: #1890ff;
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
        margin: 10px 0;
        border-radius: 5px;
    }

    blockquote {
        border-left: 4px solid #ffcc00;
        padding-left: 10px;
        color: #ccc;
        font-style: italic;
    }

    pre {
        background: #000;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
    }

    ul, ol {
        padding-left: 20px;
    }
`;

function ArticleDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/articles/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch article");
                }
                return response.json();
            })
            .then(data => {
                console.log("文章数据：", data);
                setArticle(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Container><p>加载中...</p></Container>;
    if (error) return <Container><p>发生错误: {error}</p></Container>;
    if (!article) return <Container><p>文章未找到</p></Container>;

    // ✅ 解析 EditorJS 数据
    let htmlContent = "";
    try {
        const parsedContent = JSON.parse(article.content);
        console.log("解析后的 EditorJS JSON:", parsedContent);
        const parsedBlocks = edjsParser.parse(parsedContent);
        console.log("转换后的 HTML:", parsedBlocks);

        htmlContent = Array.isArray(parsedBlocks) ? parsedBlocks.join("") : parsedBlocks;
    } catch (error) {
        console.warn("文章内容格式错误，无法解析 EditorJS JSON", error);
        htmlContent = article.content; // 可能是 HTML，直接渲染
    }

    return (
        <Container>
            <ArticleWrapper>
                <Title>{article.title}</Title>
                <Meta>作者: {article.author} | 发布: {new Date(article.createdAt).toLocaleString()}</Meta>
                <Content>{parse(htmlContent)}</Content> {/* ✅ 解析 HTML 富文本 */}
            </ArticleWrapper>
        </Container>
    );
}

export default ArticleDetail;
