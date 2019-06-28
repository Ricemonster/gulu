// NPM 配置 
// 导入
import Button from './src/button'
import ButtonGroup from './src/button-group'
import Icon from './src/icon'


// 导出
export {Button,ButtonGroup,Icon}
// 这里的import是要转译的，不然会无法使用


// 上传流程
// 1.改版本号
// 2.npx parcel build index.js --no-cache --no-minify 生成转译后的文件
// 3.npm adduser 连接到npm线上仓库
// 4.npm publish 