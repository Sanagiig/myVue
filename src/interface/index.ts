import * as base from './base'
import * as component from  './component'
import * as compiler from  './compiler'
import * as options from  './options'
import * as vnode from  './vnode'
import * as watch from  './watch'
import * as dep from  './dep'
import * as globalApi from  './global-api'
import * as config from  './config'
import * as util from  './util'

export default {
    ...base,
    ...component,
    ...compiler,
    ...options,
    ...vnode,
    ...watch,
    ...dep,
    ...globalApi,
    ...config,
    ...util
}