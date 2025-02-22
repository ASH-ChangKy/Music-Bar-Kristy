import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Grid, Button } from "antd";

const { useBreakpoint } = Grid;

function Menu() {
    const screens = useBreakpoint(); // 监听屏幕尺寸
    const menuPages = [
        [
            { name: "マティーニ", type: "カクテル", price: "¥1,200" },
            { name: "モヒート", type: "カクテル", price: "¥1,100" },
            { name: "マルガリータ", type: "カクテル", price: "¥1,300" },
            { name: "オールドファッション", type: "カクテル", price: "¥1,400" },
            { name: "ダイキリ", type: "カクテル", price: "¥1,100" },
            { name: "カイピリーニャ", type: "カクテル", price: "¥1,200" },
        ],
        [
            { name: "山崎12年", type: "ウイスキー", price: "¥1,800" },
            { name: "白州", type: "ウイスキー", price: "¥1,700" },
            { name: "マッカラン18年", type: "ウイスキー", price: "¥2,500" },
            { name: "ジョニーウォーカー・ブルーラベル", type: "ウイスキー", price: "¥3,000" },
            { name: "ラフロイグ10年", type: "ウイスキー", price: "¥1,600" },
            { name: "アードベッグ", type: "ウイスキー", price: "¥1,900" },
        ],
        [
            { name: "シャトー・マルゴー", type: "ワイン", price: "¥15,000" },
            { name: "ドン・ペリニヨン", type: "シャンパン", price: "¥22,000" },
            { name: "モエ・エ・シャンドン", type: "シャンパン", price: "¥12,000" },
            { name: "オーパス・ワン", type: "ワイン", price: "¥18,000" },
            { name: "ボランジェ", type: "シャンパン", price: "¥20,000" },
        ],
    ];

    const [pageIndex, setPageIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    // 手势滑动（仅在小屏设备上生效）
    const handlers = useSwipeable({
        onSwipedLeft: () => !screens.md && changePage(1),
        onSwipedRight: () => !screens.md && changePage(-1),
        trackTouch: true,
        trackMouse: true,
    });

    // 翻页逻辑
    const changePage = (newDirection) => {
        if ((newDirection === 1 && pageIndex < menuPages.length - 1) ||
            (newDirection === -1 && pageIndex > 0)) {
            setDirection(newDirection);
            setPageIndex((prev) => prev + newDirection);
        }
    };

    return (
        <div style={{
            backgroundColor: "#f3e5d7",
            color: "#3e2723",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            position: "relative",
            height: "auto",
        }} {...handlers}>

            {/* 标题固定位置 */}
            <h1 style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "20px",
                marginTop: "50px",
            }}>
                🍷 Kristy Bar メニュー
            </h1>

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "900px",
                position: "relative",
            }}>
                {/* 左箭头（大屏幕显示） */}
                {screens.md && (
                    <Button
                        type="text"
                        icon={<LeftOutlined style={{ fontSize: "24px" }} />}
                        disabled={pageIndex === 0}
                        onClick={() => changePage(-1)}
                        style={{
                            position: "absolute",
                            left: "-60px",
                            zIndex: 10,
                            color: pageIndex === 0 ? "#aaa" : "#3e2723",
                        }}
                    />
                )}

                {/* 菜单内容，自适应高度 */}
                <motion.div
                    key={pageIndex}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 50 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        backgroundColor: "#fffaf2",
                        padding: "30px",
                        borderRadius: "12px",
                        maxWidth: "800px",
                        textAlign: "left",
                        lineHeight: "1.8",
                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                        width: "90%",
                        minHeight: "250px", // 设置最小高度
                        position: "relative",
                    }}
                >
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: screens.md ? "1fr 1fr 1fr" : "1fr",
                        gap: "20px"
                    }}>
                        {menuPages[pageIndex].map((item, index) => (
                            <div key={index} style={{
                                fontSize: "1.4rem",
                                fontWeight: "bold",
                                paddingBottom: "12px",
                                borderBottom: "1px solid #d7ccc8",
                            }}>
                                {/* 名称在第一行 */}
                                <span style={{ color: "#d84315", display: "block" }}>{item.name}</span>
                                {/* 小屏时价格单独一行 */}
                                <span style={{
                                    color: "#6d4c41",
                                    fontSize: "1.2rem",
                                    display: screens.md ? "inline" : "block",
                                    marginTop: screens.md ? "0" : "5px"
                                }}>
                                    {screens.md ? `(${item.type}) - ${item.price}` : `(${item.type})`}
                                </span>
                                {!screens.md && (
                                    <span style={{ color: "#6d4c41", fontSize: "1.2rem" }}>{item.price}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 右箭头 */}
                {screens.md && (
                    <Button
                        type="text"
                        icon={<RightOutlined style={{ fontSize: "24px" }} />}
                        disabled={pageIndex === menuPages.length - 1}
                        onClick={() => changePage(1)}
                        style={{
                            position: "absolute",
                            right: "-60px",
                            zIndex: 10,
                            color: pageIndex === menuPages.length - 1 ? "#aaa" : "#3e2723",
                        }}
                    />
                )}
            </div>

            {/* 页数指示器 */}
            <div style={{ marginTop: "15px" }}>
                {menuPages.map((_, i) => (
                    <span key={i} style={{
                        fontSize: "1.2rem",
                        margin: "0 5px",
                        color: i === pageIndex ? "#d84315" : "#bbb",
                        transition: "color 0.3s",
                    }}>
                        ●
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Menu;
