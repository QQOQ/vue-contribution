// 导入组件
import contribution from './contribution'

// 为组件提供 install 安装方法，供按需引入
contribution.install = function (Vue) {
  Vue.component(contribution.name, contribution)
}

// 默认导出组件
export default contribution