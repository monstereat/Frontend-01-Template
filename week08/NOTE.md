本周主要讲解，选择器，css排版相关知识，通过对这些知识的学习，更进一不了解了CSS的样式应用，排版，前端布局各种怪异现象，进一不完善自己的知识体系。

重新CSS 选择 器

选择器语法

简单选择器

*

div svg|a

.cls

# id

[arrt=value]

:hover

::before

复合选择器

<简单选择器><简单选择器><简单选择器>

- 或者div必须写在最前面

复杂选择器

<复合选择器>

<sp>&lt;复合选择器&gt;</sp>

<复合选择器>">"<复合选择器>

<复合选择器>"~"<复合选择器>

<复合选择器>"+"<复合选择器>

<复合选择器>"||"<复合选择器>

选择器优先级

S = x_n^3 + x_n^2 + x*n^31 + 1

伪类

链接/行为

：any-link

: link:visited

:hover

:active

:focus

:target

重学CSS 排版

BOX

标签 Tag --- 源代码

元素 Element --- 语言

盒 Box ---- 表现

盒模型

box-sizing:

content-box width = content

border-box width = padding + border + content

正常流

正常流排版

收集盒进行

计算盒在行中的排布

计算行的排布

正常流的行模型

float与clear

margin折叠

overflow:visible与BFC

Flex

Flex排版

手机盒进行

计算盒在主轴方向的排布

计算盒在交叉轴方向的排布

分行

根据主轴尺寸，把元素分进行

若设置了no-warp，则强行分配进第一行

计算主轴方向

找出所有Flex元素

把主轴方向的剩余尺寸按比例分配给这些元素

若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

计算交叉轴方向

根据每一行中最大元素尺寸计算行高

根据行高flex-align和itemalign，确定元素具体位置。
