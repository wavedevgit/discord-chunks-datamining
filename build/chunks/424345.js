/** Chunk was on web.js **/
/** chunk id: 424345, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  let r = new n.constructor(n.toJS());
  return r.position_ = t.order, null != t.nickname && (r.name = t.nickname), null != t.parentId && t.parentId in e && (r.parent_id = t.parentId), r
}
require.d(exports, {
  K: () => r
})