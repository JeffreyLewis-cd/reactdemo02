// FancyButton.js 子组件
import React from 'react';

// 接受props和ref作为参数
// 返回一个React 组件
const FancyButton = React.forwardRef((props, ref) => (
    <button className="fancybutton forwardRef666" ref={ref}>
        {props.children}
    </button>
));

export default FancyButton;