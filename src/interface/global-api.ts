import {ComponentCtor} from './component'
import {Config} from './config'
export declare interface GlobalAPI {
    cid: number;
    options: Object;
    config: Config;
    util: Object;
  
    extend: (options: Object) => Function;
    set: <T>(target: Object | Array<T>, key: string | number, value: T) => T;
    delete: <T>(target: Object| Array<T>, key: string | number) => void;
    nextTick: (fn: Function, context?: Object) => void | Promise<any>;
    use: (plugin: Function | Object) => GlobalAPI;
    mixin: (mixin: Object) => GlobalAPI;
    compile: (template: string) => { render: Function, staticRenderFns: Array<Function> };
  
    directive: (id: string, def?: Function | Object) => Function | Object | void;
    component: (id: string, def?: ComponentCtor | Object) => ComponentCtor;
    filter: (id: string, def?: Function) => Function | void;
  
    observable: <T>(value: T) => T;
  
    // allow dynamic method registration
    [key: string]: any
  };