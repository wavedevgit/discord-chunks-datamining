/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";

function r(e, t, n) {
  let r = new n.constructor(n.toJS());
  return r.position_ = t.order, null != t.nickname && (r.name = t.nickname), null != t.parentId && t.parentId in e && (r.parent_id = t.parentId), r
}
n.d(t, {
  r: () => r
})