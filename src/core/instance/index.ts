import { ComponentCtor,Component } from '../../interface/component'
import { ComponentOptions } from '../../interface/options'
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

var Vue:any = function (this:Component,options:ComponentOptions) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin((<ComponentCtor>Vue))
stateMixin((<ComponentCtor>Vue))
eventsMixin((<ComponentCtor>Vue))
lifecycleMixin((<ComponentCtor>Vue))
renderMixin((<ComponentCtor>Vue))

export default Vue