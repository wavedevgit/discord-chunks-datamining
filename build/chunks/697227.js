/** Chunk was on web.js **/
/** chunk id: 697227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => a,
  W: () => o
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722);

function o(e) {
  let t = e.items;
  return i()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId
}

function a(e) {
  var t;
  let n = null == e || null == (t = e.renewalMutations) ? true : t.items;
  if (null != n) return i()(n.length <= 1, "more than 1 renewal mutation for role subscription"), null == n ? true : n[0].planId
}