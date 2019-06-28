---
title: 快速上手
---

# 快速上手

本节将介绍如何在项目中使用轱辘UI。

### 引入轱辘

::: warning 
你可以引入整个 gulu，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 gulu。
:::

##### 部分引入

如果使用 Button 则要在使用的组件中写入以下内容：

``` js{4}
import {Button} from 'gulu-rm';
import 'gulu-rm/dist/index.css'

export default {
  name: '#app',
  components: {
    'g-button': Button
  }
}
```



