import Vue from 'vue'
import Element, { MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { Message } from 'element-ui'

Vue.use(Element)

Vue.prototype.$message = Element.Message
Vue.prototype.$confirm = MessageBox.confirm
