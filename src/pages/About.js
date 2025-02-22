import React from "react";
import { InstagramOutlined } from "@ant-design/icons";
import { SiXiaohongshu } from "react-icons/si"; // 需要安装 react-icons

function About() {
    return (
        <div style={{
            backgroundColor: "rgb(0, 0, 0)",
            color: "white",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
        }}>
            {/* 标题部分 */}
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
                <span style={{ filter: "invert(56%) sepia(98%) saturate(747%) hue-rotate(280deg)" }}>🎶</span> Music Bar Kristy - 池袋に誕生！
            </h1>
            <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6", marginBottom: "20px" }}>
                📍 <strong>東京都豊島区池袋2丁目61-3</strong>（Ikebukuro, Toshima City, Tokyo 171-0014）
            </p>

            {/* 介绍文本 */}
            <div style={{
                backgroundColor: "#222",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "700px",
                textAlign: "left",
                lineHeight: "1.8",
                boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
            }}>
                <p>
                    現在、<strong>Music Bar Kristy</strong> はオープンに向けて準備中です！<br />
                    池袋の街角に、新たな<strong>音楽</strong>と<strong>お酒</strong>が楽しめる空間が誕生します。
                </p>
                <hr style={{ border: "1px solid #444" }} />
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>🎵 開放的な大きな窓がある心地よい空間</li>
                    <li>🍸 本格カクテル＆厳選ウイスキー</li>
                    <li>🎹 生演奏のピアノと心に響く歌声</li>
                    <li>🎤 日本語＆中国語のライブパフォーマンス</li>
                </ul>
                <hr style={{ border: "1px solid #444" }} />
                <p>
                    現在、店内を<strong>改装中</strong>！<br />
                    <strong style={{ color: "#ffcc00" }}>2025年3月中旬オープン予定！</strong>
                </p>
                <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>
                    📌 最新情報は随時更新！フォローをお忘れなく！
                </p>
            </div>

            {/* Google 地图嵌入 */}
            <div style={{ marginTop: "30px", width: "100%", maxWidth: "700px" }}>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="350"
                    frameBorder="0"
                    style={{ border: "0", borderRadius: "10px", boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6450036435936!2d139.70722277634488!3d35.73494822702027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5fb055df7d%3A0xce08884b8ea8d1bf!2s2-ch%C5%8Dme-61%20Ikebukuro%2C%20Toshima%20City%2C%20Tokyo%20171-0014!5e0!3m2!1szh-CN!2sjp!4v1740211897004!5m2!1szh-CN!2sjp"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Instagram & 小红书 - 分两行 & 居中对齐 */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "40px",
                gap: "10px",
            }}>
                {/* Instagram */}
                <a href="https://www.instagram.com/musicbar_kristy" target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#E4405F", display: "flex", alignItems: "center", gap: "10px" }}>
                    <InstagramOutlined style={{
                        fontSize: "32px",
                        transition: "transform 0.3s",
                    }} onMouseOver={(e) => e.target.style.transform = "scale(1.3)"}
                        onMouseOut={(e) => e.target.style.transform = "scale(1)"} />
                    <span style={{ fontSize: "1.2rem" }}>Instagram</span>
                </a>

                {/* 小红书 */}
                <a href="https://www.xiaohongshu.com/user/profile/65720702000000001902e90a" target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#d81e06", display: "flex", alignItems: "center", gap: "10px" }}>
                    <SiXiaohongshu style={{
                        fontSize: "32px",
                        transition: "transform 0.3s",
                    }} onMouseOver={(e) => e.target.style.transform = "scale(1.3)"}
                        onMouseOut={(e) => e.target.style.transform = "scale(1)"} />
                    <span style={{ fontSize: "1.2rem" }}>小红书</span>
                </a>
            </div>

        </div>
    );
}

export default About;
