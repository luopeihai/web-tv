import { ReactNode, useState } from 'react';
import { flushSync } from 'react-dom';


interface IVirtualizedList {
    containerHeight: number;
    itemHeight: number;
    itemCount: number;
    rowCount: number;
    renderItem: (index: number) => ReactNode
}

/**
 * 
 * @param param0 
 * @returns 
 */
const VirtualizedList = ({ containerHeight, itemHeight, itemCount, renderItem, rowCount }: IVirtualizedList) => {

    const [scrollTop, setScrollTop] = useState(0);
    const contentHeight = (itemHeight * itemCount) / rowCount;

    //
    let startIdx = Math.floor(scrollTop / itemHeight);
    let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight);

    // 上下额外多渲染几个 item，解决滚动时来不及加载元素出现短暂的空白区域的问题
    const paddingCount = 2;
    startIdx = Math.max(startIdx - paddingCount, 0); // 处理越界情况
    endIdx = Math.min(endIdx + paddingCount, itemCount - 1);
    console.log('scrollTop', scrollTop, itemHeight, startIdx)

    const top = itemHeight * startIdx; // 第一个渲染 item 到顶部距离

    // 需要渲染的 items
    const items = [];
    for (let i = startIdx * rowCount; i <= endIdx * rowCount; i++) {
        items.push(renderItem(i));
    }

    return (
        <div
            style={{ height: containerHeight, overflow: 'auto' }}
            onScroll={(e) => {
                const scrollTop = (e.target as HTMLElement).scrollTop
                flushSync(() => {
                    setScrollTop(scrollTop);
                });
            }}
        >
            <div style={{ height: contentHeight }}>
                {/* 一个将 items 往下推到正确位置的空元素 */}
                <div style={{ height: top }}></div>
                <div className="movie-list">
                    {items}
                </div>
            </div>
        </div>
    );
}

export default VirtualizedList;
