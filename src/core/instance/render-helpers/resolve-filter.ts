/* @flow */

import { identity, resolveAsset } from '../../util/index'

/**
 * Runtime helper for resolving filters
 */
export function resolveFilter (this:any,id: string): Function {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}
