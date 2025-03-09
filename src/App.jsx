import React, { useState, useEffect, useRef } from "react";
import './App.css'
// 🔥 动态加载所有组件
const components = import.meta.glob("./components/*.jsx");
const rawSources = import.meta.glob("./components/*.jsx", { query: "?raw", import: "default" });
import {motion} from 'framer-motion'

export default function App() {
  const wheelRef = useRef(null);
  const [loadedComponents, setLoadedComponents] = useState([]);
  const [height, setHeight] = useState(300); // 计算屏幕高度，防止 NaN
  const [currentIndex, setCurrentIndex] = useState(0);
  // 🎯 监听窗口变化，确保 `height` 计算正确
  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);
    updateHeight(); // 初始化
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // 📥 动态加载组件 & 代码
  useEffect(() => {
    const loadComponents = async () => {
      const imports = await Promise.all(
        Object.entries(components).map(async ([path, importFn]) => {
          const name = path.split("/").pop().replace(".jsx", "");
          const module = await importFn();
          const Component = module.default; // ✅ 确保正确获取组件
          const code = await rawSources[path](); // ✅ 获取源码
          return { name, Component, code };
        })
      );
      setLoadedComponents(imports.reverse()); // 逆序排列，最新的在最前
    };

    loadComponents();
  }, []);


  // 🎡 鼠标滚轮控制水平滚动
  const handleWheel = (e) => {
    if (wheelRef.current) {
      wheelRef.current.scrollLeft += e.deltaY * 10;
    }
  };

  return (
    <div
      className="bg-black h-screen text-white font-mono flex overflow-x-auto snap-x overflow-y-hidden"
      ref={wheelRef}
      onWheel={handleWheel}
      style={{ scrollBehavior: "smooth" }}
    >
      <h1 className="text-[100px] snap-start"
            onMouseEnter={() => {setCurrentIndex( -1)}}
      >CSS Battles </h1>
      <h1 className="absolute bottom-10 left-0 text-[20px] snap-start">created by Liu Zilong </h1>
      {loadedComponents.map(({ name, Component, code }, index) => (
        <motion.div key={index} className="h-full aspect-[4/3] snap-start group"
          
        >
          <div
            data-number={loadedComponents.length - index}
            className="relative  group h-screen aspect-[4/3] rounded-md "
            onMouseEnter={() => {console.log(`enter ${index}`),setCurrentIndex( index)}}
            style={{
              transform: `scale(${height / 300})`, // ⚡ 确保比例缩放
              transformOrigin: "top left",
            }}
          >
            <Component />
          </div>
            <div className="z-1000 fixed right-0 top-0 opacity-0 " style={{ opacity: currentIndex === index ? 1 : 0 }}>
              <CodeBox name={name} code={code} />
            </div>
        </motion.div>
      ))}
    </div>
  );
}

// 📝 代码展示组件
function CodeBox({ name, code }) {
  return (
    <div className="mt-4 p-4  bg-neutral-800 text-gray-200 rounded-md overflow-x-auto text-sm w-[90%] mx-auto">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <pre className="whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
}
