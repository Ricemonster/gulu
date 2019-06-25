# 轱辘

[![Build Status](https://www.travis-ci.org/Ricemonster/gulu.svg?branch=master)](https://www.travis-ci.org/Ricemonster/gulu)



## 介绍

这是我在学习Vue的过程中，创建的一个UI框架

## 开始使用

1. 添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{margin: 0;padding: 0;box-sizing:border-box;}
    ```
    你还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```
    :root{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    } 
    ```
    IE 9 及以上浏览器都支持此样式。
2. 安装 
    ```
    npm i --save gulu-rm
    ```
3. 引入
    ```
    import {Button, ButtonGroup, Icon} from 'gulu-rm'
    import 'gulu-rm/dist/index.css' 

    export default {
        name: 'app',
        components:{
            'g-button': Button,
            'g-icon': Icon,
            'g-button-group': ButtonGroup
        }
    }
    ```

## 文档

## 提问 

## 变更记录

## 联系方式

## 贡献代码


