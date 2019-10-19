export function isAsyncPlaceholder (node: any): boolean {
  return node.isComment && node.asyncFactory
}
