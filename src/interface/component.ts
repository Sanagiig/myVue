import {Obj} from './base'
import {VNodeChildren,VNodeData,ScopedSlotsData} from './vnode'
import {ComponentOptions} from './options'
import {Watcher} from './watch'
import {VNode} from './vnode'

// 组件构造函数
export declare interface ComponentCtor {
// constructor information
   new ():Component
   cid: number;
   options: Obj;
  // extend
   extend: (options: Obj) => Function;
   superOptions: Obj;
   extendOptions: Obj;
   sealedOptions: Obj;
   super: ComponentCtor;
  // assets
   directive: (id: string, def?: Function | Obj) => Function | Obj | void;
   component: (id: string, def?: Component | Obj) =>Component;
   filter: (id: string, def?: Function) => Function | void;
  // functional context constructor
   FunctionalRenderContext: Function;
}

// 组件实例
export declare interface Component {
  constructor:ComponentCtor;
  // public properties
  $el: any; // so that we can attach __vue__ to it
  $data: Obj;
  $props: Obj;
  $options: ComponentOptions;
  $parent: Component | void;
  $root: Component;
  $children: Component[];
  $refs: { [key: string]: Component | Element | Array<Component | Element> | void };
  $slots: { [key: string]: Array<VNode> };
  $scopedSlots: { [key: string]: () => VNodeChildren };
  $vnode?: VNode | void; // the placeholder node for the component in parent's render tree
  $attrs: { [key: string] : string };
  $listeners: { [key: string]: Function | Array<Function> };
  $isServer: boolean;

  // public methods
  $mount: (el?: Element | string, hydrating?: boolean) => Component;
  $forceUpdate: () => void;
  $destroy: () => void;
  $set: <T>(target: Obj | Array<T>, key: string | number, val: T) => T;
  $delete: <T>(target: Obj | Array<T>, key: string | number) => void;
  $watch: (expOrFn: string | Function, cb: Function, options?: Obj) => Function;
  $on: (event: string | Array<string>, fn: Function) => Component;
  $once: (event: string, fn: Function) => Component;
  $off: (event?: string | Array<string>, fn?: Function) => Component;
  $emit: (event: string, ...args: Array<any>) => Component;
  $nextTick: (fn: Function) => void | Promise<any>;
  $createElement: (tag?: string | Component, data?: Obj, children?: VNodeChildren,unkonw?:any) => VNode;

  // private properties
  _uid: number | string;
  _name: string; // this only exists in dev mode
  _isVue: true;
  _self: Component;
  _renderProxy: Component;
  _renderContext: Component;
  _watcher: Watcher | null;
  _watchers: Array<Watcher>;
  _computedWatchers: { [key: string]: Watcher };
  _data: Obj;
  _props: Obj;
  _events: Obj;
  _inactive: boolean | null;
  _directInactive: boolean;
  _isMounted: boolean;
  _isDestroyed: boolean;
  _isBeingDestroyed: boolean;
  _vnode: VNode | null | void; // self root node
  _staticTrees: Array<VNode> | null; // v-once cached trees
  _hasHookEvent: boolean;
  _provided: Obj;
  // _virtualComponents?: { [key: string]: Component };

  // private methods

  // lifecycle
  _init: Function;
  _mount: (el?: Element | void, hydrating?: boolean) => Component;
  _update: (vnode: VNode, hydrating?: boolean) => void;

  // rendering
  _render: () => VNode;

  __patch__: (
    a: Element | VNode | void | null,
    b: VNode | null,
    hydrating?: boolean,
    removeOnly?: boolean,
    parentElm?: any,
    refElm?: any
  ) => any;

  // createElement

  // _c is internal that accepts `normalizationType` optimization hint
  _c: (
    vnode?: VNode,
    data?: VNodeData,
    children?: VNodeChildren,
    normalizationType?: number
  ) => VNode | void;

  // renderStatic
  _m: (index: number, isInFor?: boolean) => VNode | VNodeChildren;
  // markOnce
  _o: (vnode: VNode | Array<VNode>, index: number, key: string) => VNode | VNodeChildren;
  // toString
  _s: (value: any) => string;
  // text to VNode
  _v: (value: string | number) => VNode;
  // toNumber
  _n: (value: string) => number | string;
  // empty vnode
  _e: () => VNode;
  // loose equal
  _q: (a: any, b: any) => boolean;
  // loose indexOf
  _i: (arr: Array<any>, val: any) => number;
  // resolveFilter
  _f: (id: string) => Function;
  // renderList
  _l: (val: any, render: Function) => Array<VNode>;
  // renderSlot
  _t: (name: string, fallback: Array<VNode>, props: Obj) => Array<VNode>;
  // apply v-bind object
  _b: (data: any, tag: string, value: any, asProp: boolean, isSync?: boolean) => VNodeData;
  // apply v-on object
  _g: (data: any, value: any) => VNodeData;
  // check custom keyCode
  _k: (eventKeyCode: number, key: string, builtInAlias?: number | Array<number>, eventKeyName?: string) => boolean;
  // resolve scoped slots
  _u: (scopedSlots: ScopedSlotsData, res?: Obj) => { [key: string]: Function };

  // SSR specific
  _ssrNode: Function;
  _ssrList: Function;
  _ssrEscape: Function;
  _ssrAttr: Function;
  _ssrAttrs: Function;
  _ssrDOMProps: Function;
  _ssrClass: Function;
  _ssrStyle: Function;

  // allow dynamic method registration
  [key: string]: any
};
