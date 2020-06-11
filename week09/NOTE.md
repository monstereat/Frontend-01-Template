本周通过对CSS 动画绘制，颜色和DOM的部分只是的学习，进一步了解其中的细节实现原理，补充完善自己的知识体系。

重学 CSS （动画与绘制）

Animation

@keyframes定义

animation：使用

@keyframes mykf { 

from {background: red;} 

to {background: yellow;} 

} 

div { 

animation:mykf 5s infinite; 

}

animation-name 时间曲线

animation-duration 动画的时长

animation-timing-function 动画的时间曲线

animation-delay动画开始前的延迟

animation-iteration-count 动画的播放次数

animation-direction 动画的方向



Transition

transition-property 要变换的属性

transition-duration变换的时长

transition-time-function 时间曲线

transition-delay 延迟



重新CSS 渲染与颜色

形状

border

box-shadow

border-radius



重学 HTML  HTML的定义：XML与SGML

重学HTML   HTML标签-语义

重新HTML   HTML语法



合法元素

Element: < tagname></ tagname>

Text: text

Comment: <--comments-->

DoucmentType: <!Doctype html>

ProcessingInstruction: < ?a 1?>

CDATA: <! [CDATA[]]



字符引用

&#161

&amp

&lt

&quot



重新DOM  （DOM）

导航类操作

parentNode

childNodes

firstChild

lastChild

nextSibling

previousSibling



修改操作

appendChild

insertBefore

removeChild

replaceChild



高级操作

compareDocumentPositon 是一个用于比较两个节点中关系的函数

contains 检查一个节点是否包含另一个节点的函数

isEqualNode 检查两个节点是否完全相同

isSameNode 检查两个节点是否是同一个节点，实际上在 JavaScript中找可以用"==="

cloneNode复制一个节点，如果传入参数true，则会连同子元素做深拷贝



重新DOM  （Event)

Event： 冒泡与捕获

