import {ComponentCtor,Component} from './component'
import {ComponentOptions} from './options'

export declare type VNodeChildren = Array<VNode | string> | string;

export declare interface VNodeCtor{
  new (
    tag?: string,
    data?: VNodeData,
    children?: Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) :VNode;
}

export declare interface VNode {
  tag: string | void;
  data: VNodeData | void;
  children: Array<VNode>;
  text: string | void;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ComponentOptions; // for SSR caching
  devtoolsMeta: Object; // used to store functional render context for devtools
  fnScopeId: string; // functional scope id support

}

export declare type VNodeComponentOptions = {
  Ctor: ComponentCtor;
  propsData: Object;
  listeners: Object;
  children: Array<VNode>;
  tag?: string;
};

export declare type MountedComponentVNode = {
  context: Component;
  componentOptions: VNodeComponentOptions;
  componentInstance: Component;
  parent: VNode;
  data: VNodeData;
};

// interface for vnodes in update modules
export declare type VNodeWithData = {
  tag: string;
  data: VNodeData;
  children: Array<VNode>;
  text: void;
  elm: any;
  ns: string | void;
  context: Component;
  key: string | number | void;
  parent?: VNodeWithData;
  componentOptions?: VNodeComponentOptions;
  componentInstance?: Component;
  isRootInsert: boolean;
};

export declare interface VNodeData {
  key?: string | number;
  slot?: string;
  ref?: string;
  is?: string;
  pre?: boolean;
  tag?: string;
  staticClass?: string;
  class?: any;
  staticStyle?: { [key: string]: any };
  style?: Array<Object> | Object;
  normalizedStyle?: Object;
  props?: { [key: string]: any };
  attrs?: { [key: string]: string };
  domProps?: { [key: string]: any };
  hook?: { [key: string]: Function };
  on?: { [key: string]: Function | Array<Function> };
  nativeOn?: { [key: string]: Function | Array<Function> };
  transition?: Object;
  show?: boolean; // marker for v-show
  inlineTemplate?: {
    render: Function;
    staticRenderFns: Array<Function>;
  };
  directives?: Array<VNodeDirective>;
  keepAlive?: boolean;
  scopedSlots?: { [key: string]: Function };
  model?: {
    value: any;
    callback: Function;
  };
};

export declare type VNodeDirective = {
  name: string;
  rawName: string;
  value?: any; 
  oldValue?: any;
  arg?: string;
  modifiers?: ASTModifiers;
  def?: Object;
};

export declare type ScopedSlotsData = Array<{ key: string, fn: Function }>;
