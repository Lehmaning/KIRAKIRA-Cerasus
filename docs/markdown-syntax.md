# Markdown 扩展语法

## 基本语法

### 文字格式
<table>
<td>

```markdown
*倾斜*
**加粗**
***加粗倾斜***
~~删除线~~
`行内代码`
$$行内公式$$
```

</td>
<td>

*倾斜*  
**加粗**  
***加粗倾斜***  
~~删除线~~  
`行内代码`  
$$行内公式$$

</td>
</table>

### 段落格式
<table>
<td>

````markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
> 引用
> > 引用内引用

    缩进
* 无序列表
  * 带缩进的无序列表（使用两空格或一制表符表示缩进一级）
- 其它无序列表标号 (-)
+ 其它无序列表标号 (+)
1. 有序列表（前面的数字无所谓）
   1. 带缩进的有序列表
- [ ] 待完成任务
- [x] 已完成任务

``` 语言名称
块级代码
```

$$
居中公式
$$
````

</td>
<td>

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
> 引用
> > 引用内引用

    缩进
* 无序列表
  * 带缩进的无序列表（使用两空格或一制表符表示缩进一级）
- 其它无序列表标号 (-)
+ 其它无序列表标号 (+)
1. 有序列表（前面的数字无所谓）
   1. 带缩进的有序列表
- [ ] 待完成任务
- [x] 已完成任务

``` 语言名称
块级代码
```

$$
居中公式
$$

</td>
</table>

### 功能
```markdown
[链接名称](链接地址)
![图片描述](图片地址)
```

### 转义
在各类 Markdown 符号前添加反斜杠表示转义，例如：
<table>
<td>

```markdown
\*\*忽略加粗\*\*
\# 忽略标题
\`忽略行内代码\`
!\[忽略图片](#)
\![这将输出一个感叹号和一个链接](#)
\\ 输出一个反斜杠
```

</td>
<td>

\*\*忽略加粗\*\*  
\# 忽略标题  
\`忽略行内代码\`  
!\[忽略图片](#)  
\![这将输出一个感叹号和一个链接](#)  
\\ 输出一个反斜杠  

</td>
</table>

对于 Unicode 字符的输出，HTML 原生有对 Unicode 字符编码的支持，因此不使用和许多编程语言类似的以 `\u` 开头的语法。
```html
&#x4e00; 输出 Unicode 字符 U+4E00 “一”
&#x1f010; 输出 Unicode 字符 U+1F010 “🀐”
```

### 分割线
使用三个及以上横杠表示。
```markdown
---
```
---

### 艾特
```markdown
@某人 后加空格
```

### 话题
```markdown
#井号包裹内容#
```
渲染为标签链接，点击后搜索该标签 / 关键词 / kv 号。

## 较为公认的扩展语法

### 文字格式
<table>
<td>

```markdown
文本^上标^
文本~下标~
```

</td>
<td>

```html
文本<sup>上标</sup>
文本<sub>下标</sub>
```

</td>
<td>
<p>文本<sup>上标</sup></p>
<p>文本<sub>下标</sub></p>
</td>
</table>

### 脚注
> 可弃用，脚注在当前用途中意义不是很大。
```markdown
可以插入脚注[^1]和另一个[^长脚注]。
[^1]: 脚注。
[^长脚注]: 多行

脚注。
```

### 定义列表
> 可弃用，使用缩进替换之。
<table>
<td>

```markdown
词语
: 解释
词语
: 解释
```

</td>
<td>

```html
<dl>
	<dt>词语</dt>
	<dd>解释</dd>
	
	<dt>词语</dt>
	<dd>解释</dd>
</dl>
```

</td>
<td>
<dl>
<dt>词语</dt>
<dd>解释</dd>
<dt>词语</dt>
<dd>解释</dd>
</dl>
</td>
</table>

### 缩写
> 可弃用，使用 Tooltip 模板替换之。
```markdown
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

HTML 规范由 W3C 维护。
```

### 绘文字
> 可弃用，直接从输入法插入对应符号即可。
```markdown
:绘文字英文名:
```

### 插入
> 可弃用，使用下划线替代之。
<table>
<td>

```markdown
++插入++
```

</td>
<td>

```html
<ins>插入</ins>
```

</td>
<td>
<ins>插入</ins>
</td>
</table>

### 标记/高亮
<table>
<td>

```markdown
==高亮==
```

</td>
<td>

```html
<mark>高亮</mark>
```

</td>
<td>
<mark>高亮</mark>
</td>
</table>

## 新增的扩展和修改语法

### 文字格式
<table>
<td>

```markdown
_下划线_
```

</td>
<td>

```html
<u>下划线</u>
```

</td>
<td>
<u>下划线</u>
</td>
</table>
原版没有下划线表示，该符号表示倾斜。

### 段落格式
* 统一缩进所用的空格数，现版纯缩进、无序列表缩进、有序列表缩进的所需空格数分别为 4、2、3，现统一为 2。
<table>
<td>

```markdown
    缩进
* 无序列表
  * 带缩进的无序列表
1. 有序列表
   1. 带缩进的有序列表
```

</td>
<td>

```markdown
  缩进
* 无序列表
  * 带缩进的无序列表
1. 有序列表
  1. 带缩进的有序列表
```

</td>
</table>

### 注释
虽禁用 HTML 语法，但保留其注释的语法。即：
```html
<!-- -->
```
为啥不用其它编程语言常用的 `//` 和 `/* */` 语法？因为我希望它的移植性可以更高些。

### 换行
使用一个回车表示换行。原版需要两个回车表示一个段落（有下边距），或用两个空格加一个回车表示换行（尾随空格不易发现且容易被 EditorConfig 清除）。原版使用一个回车，将只会输出一个空格。

### 标点符号附近使用 Markdown 符号
原版在标点符号的**外侧**使用 Markdown 符号（如加粗等），会使 Markdown 语法失效。例如：
```markdown
**Note:** 英文冒号加粗成功！
**注意：**中文冒号加粗失败！
```
**效果：**

> **Note:** 英文冒号加粗成功！  
> **注意：**中文冒号加粗失败！

而在中文冒号后也按照英文冒号那样加空格，此时会显得冒号后空白太宽。

因此建议直接废除这个对东亚语言不友好的特性。

### 样式、类和标识符
在 Markdown 编辑器增加一个选项卡用来设置 CSS 样式。此时在 Markdown 界面可单独为段落指定类名。

优先使用用户指定的类名，其次使用系统预设的类名。以下范例为系统预设类名。
```markdown
# 居中标题 {.center}
# 居右标题 {.right}
两端对齐文本 {.justify}
```

花括号内外的空格是无所谓的。

也可以为段落指定标识符名，除了可以在 CSS 以 # 选择器匹配外，还可以充当锚点作用。例如：
```markdown
欢迎回来！{#top}
```
然后在其它地方使用链接，即可快速回到这一段落。
```markdown
[返回顶部](#top)
```

### 类 MediaWiki 模板
引用类似 MediaWiki 的模板语法来表示开发人员内置的 Vue 组件。
<table>
<td>

```mediawiki
{{kbd|键盘按键}}
{{blocktext|黑幕文本|鼠标悬浮文本|彩幕颜色}}
{{ruby|拼音|pīnyīn|可选左括号字符|可选右括号字符}}
{{tooltip|文字|工具提示文本}}
{{color|文字|文字颜色|底纹颜色}}
{{attr|行内文本|#foo.bar.baz}}
```

</td>
<td>

```html
<kbd>键盘按键</kbd>
<BlockText tooltip="鼠标悬浮文本" color="彩幕颜色">黑幕文本</BlockText>
<ruby>拼音<rp>可选左括号字符</rp><rt>pīnyīn</rt><rp>可选右括号字符</rp></ruby>
<span title="工具提示文本">文字</span>
<span style="color: 文字颜色; background-color: 底纹颜色;">文字</span>
<span id="foo" class="bar baz">行内文本</span>
```

</td>
</table>
<!-- MediaWiki 异端滚粗 Markdown（ -->

### [通用指令语法](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444)
> [灵感来源](https://blog.kaciras.com/article/18/add-video-support-to-markdown)

#### 标准格式
```markdown
!名称[描述](地址){属性}
```

例如
```markdown
!video[alt text](my_video.mp4){#id.class controls key=val key2="val 2"}
```
效果
```html
<video src="my_video.mp4" id="id" class="class" controls key="val" key2="val 2">alt text</video>
```

#### 高级格式
```markdown
!!!名称[描述](地址){属性}
详细信息
!!!
```

#### 名称
用来标识这是一个什么元素，如果省略，则默认表示为图片元素，即与标准 Markdown 一致。

#### 描述
用来表示替代文本、标题（如果可用）等。如果没有描述，不得省略方括号，应当保留一个空的方括号。

#### 属性
一种类似于 JSON 的键值对格式来表示属性。使用空格分隔项目，等号作为键与值之间的分隔符。当值为一个单词时可省略引号，当值内容的字符过于丰富时需要用引号包裹起来。当项目为布尔类型（没有值时），可省略值，直接用键名表示即可。如果键名包含 `.` 或 `#` 符号时，将识别为类和标识符，并为元素添加 class 和 id 属性；它们可以分开写也可以组合写，即 `{#foo.bar.baz}` `{.bar#foo.baz}` `{#foo .bar .baz}` 效果是一样的；如果分开写，遇到相同的，类名会合并，标识符会以后者替代前者。

如果没有属性，可以直接连同花括号一起去掉。

### 卡片
#### 链接卡片
```markdown
[链接卡片文本](@link-card:链接地址)
```

通过在链接地址前添加 `@link-card:` 来识别为链接卡片。

注意这将会将超链接从行内元素转换为块级元素。这会显示为一个长条形卡片。

#### 视频卡片
同链接卡片，这也是一个块级元素。这会显示为一个长条形卡片。
```markdown
[视频卡片标题](@link-card:KV号)
```

#### 视频磁贴
与视频卡片类似，不过这将显示为一个网格磁贴，行内块级元素 (inline-block)。
```markdown
[视频磁贴标题](@video-tile:KV号)
```

### 视频播放器
允许用户在个人首页放置一个视频播放器，来随机播放指定的多个视频 / 用户全部视频 / 某个公开的收藏夹。

````json5
```json video-player
{
	"video": "kv1", // 在这里放置视频地址。
	"autoplay": false, // 是否静音自动播放，默认为 false。
	"order": "loop", // 播放方式，默认为 loop。
}
```
````

#### 播放方式
可在

* `loop` 全部循环
* `shuffle` 随机循环

中选择其一。

#### 播放指定多个视频
```json5
{
	"video": [
		"kv1",
		"kv2",
		"kv3",
	],
}
```

#### 全部视频
```json5
{
	"video": true,
}
```

#### 收藏夹
关于收藏夹等编号前缀的说明请[参看这里](numbering-prefix.md)。
```json5
{
	"video": "kl10086",
}
```

### 表格
**表格功能语法目前有争议，因为 Markdown 的语法并不是很好用，restructuredText 则更难用，倒是有想法使用 MediaWiki 的表格语法。目的是让输入更方便，而不是让其看起来更所谓地与预览效果一致，否则想加一列、单元格合并都很麻烦。**

## 弃用功能

### 限制
* 停用对 HTML 语法的支持，一旦输入就会被转义为纯文本。警惕 <ruby>XSS<rt>小学生</rt></ruby> 攻击。
  * 但是，对于注释
* 在 CSS 编辑器中，对 `url()` 函数加以限制（直接完全禁用不是很好），以防用户通过图片来加载恶意代码。
* 单下划线字符包裹文本将替换为下划线功能，取消原版下划线字符所表示的<table><tr><td>`_倾斜_`</td><td>_倾斜_</td></tr><tr><td>`__加粗__`</td><td>__加粗__</td></tr></table>等功能。
* 废除多对一语法。例如：
  * `*` 和 `_` 包裹文本均可实现***粗、斜体***效果，现抛弃 `_` 仅保留一个 `*` 的语法。  
  * 前置 `#` 和下置 `====` 均可实现标题的功能，现弃置后者。
  * 仅考虑视觉体验，不考虑语义。HTML 自带了许多语义的标签，对于无障碍阅读器可能会有更好的体验。例如 <u>`<ins>` 标签与 `<u>` 视觉效果一致</u>，<i>`<var>` 标签与 `<em>/<i>` 视觉效果一致</i>。此时感觉没必要额外增加一个语法单独表示。
  * 不过无序列表编号除外，`*` `+` `-` 均可使用。