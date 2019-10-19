import {Obj} from './base'
import {ComponentCtor,Component} from './component'
import {ASTModifiers} from './compiler'
import {ComponentOptions} from './options'

export declare type VNodeChildren = Array<VNode | string> | string;

export declare interface VNodeCtor{
  new (
    tag?: string| void,
    data?: VNodeData | void,
    children?: Array<VNode>,
    text?: string,
    elm?: Node | void,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) :VNode;
}

export declare interface VNode {
  tag: string | void;
  data: VNodeData | void;
  child:Component | null | void;
  children?: Array<VNode>;
  text?: string  ;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void | null; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: any | void;
  isAsyncPlaceholder: boolean;
  ssrContext?: Obj | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions?: ComponentOptions; // for SSR caching
  devtoolsMeta?: any; // used to store functional render context for devtools
  fnScopeId?: string; // functional scope id support

}

export declare type VNodeComponentOptions = {
  Ctor: ComponentCtor;
  propsData: any;
  listeners: any;
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
  style?: Array<any> | any;
  normalizedStyle?: any;
  props?: { [key: string]: any };
  attrs?: { [key: string]: string };
  domProps?: { [key: string]: any };
  hook?: { [key: string]: Function };
  on?: { [key: string]: Function | Array<Function> };
  nativeOn?: { [key: string]: Function | Array<Function> };
  transition?: any;
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
  moved?:boolean;
};

export declare type VNodeDirective = {
  name: string;
  rawName: string;
  value?: any; 
  oldValue?: any;
  arg?: string;
  modifiers?: ASTModifiers;
  def?: any;
};

export declare type ScopedSlotsData = Array<{ key: string, fn: Function }>;
