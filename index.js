// NPM 配置 
// 导入
import Button from './src/button'
import ButtonGroup from './src/button-group'
import Icon from './src/icon'
import Input from './src/input'
import Row from './src/grid/row'
import Col from './src/grid/col'
import Layout from './src/layout/layout'
import Header from './src/layout/header'
import Content from './src/layout/content'
import Slider from './src/layout/slider'
import Footer from './src/layout/footer'


// 导出
export {Button,ButtonGroup,Icon,Input,Row,Col,Layout,Header,Content,Slider,Footer}
// 这里的import是要转译的，不然会无法使用


// 上传流程
// 1.改版本号
// 2.npx parcel build index.js --no-cache --no-minify 生成转译后的文件
// 3.npm adduser 连接到npm线上仓库
// 4.npm publish 