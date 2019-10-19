import {VNode as _VNode,VNodeData} from '../../../interface/vnode'
import VNode from '../vnode'
import { createFnInvoker } from './update-listeners'
import { remove, isDef, isUndef, isTrue } from '../../../shared/util'

export function mergeVNodeHook (def: any, hookKey: string, hook: Function) {
  if (def instanceof VNode) {
    def = (<VNodeData>def.data).hook || ((<VNodeData>def.data).hook = {})
  }
  let invoker:any
  const oldHook = def[hookKey]

  function wrappedHook (this:any) {
    hook.apply(this, arguments)
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook)
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook])
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook
      invoker.fns.push(wrappedHook)
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook])
    }
  }

  invoker.merged = true
  def[hookKey] = invoker
}
