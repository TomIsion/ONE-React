/**
 * 使用页面：首页
 * 用途：获取id数组，用于获取最近首页的资源信息
 * 参数： 无
 * 返回值： [Array]data
 */
const indexArrRecentResourceIds = 'http://v3.wufazhuce.com:8000/api/onelist/idlist'

/**
 * 使用页面：首页
 * 用途：根据id，获取对应的资源信息数组
 * 参数：[String]id 
 * 返回值：[Array]data.content_list
 * 注：这个异步接受传值当前城市，M站中暂无此功能
 */
const indexObjRescourceById = id => `http://v3.wufazhuce.com:8000/api/onelist/${id}/%E5%9C%B0%E7%90%83`
/**
 * content_list
 * {
 *    content_type: 0-图文 1-独立故事 2-连载 3-问答 4-音乐 5-影视
 * }
 */


export {
  indexArrRecentResourceIds,
  indexObjRescourceById,
}
