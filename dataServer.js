const path = require('path')
const fs = require('fs')

export default (req, res, next) => {
  // 获取异步请求的地址
  const url = req.url

  if (url.indexOf('.json') > -1 && url.indexOf('data/') > -1) {
    // 截取所要的路径
    // @todos 无视参数
    const _temp = url.indexOf('?')
    const strPath = url.slice(1, _temp === -1 ? url.length : _temp)

    try {
      fs.accessSync(path.resolve(__dirname, strPath))
    } catch (err) {
      res.writeHead(404)
      res.end()
    }

    const dataInfo = fs.readFileSync(path.resolve(__dirname, strPath), 'utf8')

    if (dataInfo) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(dataInfo)
    }
  } else {
    // 不是获取 .json 文件的请求
    next()
  }
}
