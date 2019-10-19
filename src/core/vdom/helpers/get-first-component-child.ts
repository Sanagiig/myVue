import {VNode} from '../../../interface/vnode'

import { isDef } from '../../../shared/util'
import { isAsyncPlaceholder } from './is-async-placeholder'

export function getFirstComponentChild (children: Array<VNode> | null): VNode | void {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i]
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}
