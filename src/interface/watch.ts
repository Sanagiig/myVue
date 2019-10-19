import {Component} from './component'
import {Dep} from './dep'
import {SimpleSet} from './util'

export declare interface WatcherCtor{
    new(vm: Component,
        expOrFn: string | Function,
        cb: Function,
        options?: Object,
        isRenderWatcher?: boolean):Watcher;
}

export declare interface Watcher {
    vm: Component;
    expression: string;
    cb: Function;
    id: number;
    deep: boolean;
    user: boolean;
    lazy: boolean;
    sync: boolean;
    dirty: boolean;
    active: boolean;
    deps: Array<Dep>;
    newDeps: Array<Dep>;
    depIds: SimpleSet;
    newDepIds: SimpleSet;
    update: Function;
    teardown: Function;
    before: Function;
    getter: Function;
    value: any;
  
  }