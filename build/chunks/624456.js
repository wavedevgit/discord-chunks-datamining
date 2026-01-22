/** Chunk was on web.js **/
/** chunk id: 624456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => a,
  l: () => s
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009);

function a(e) {
  let t = e.items;
  return i()(1 === t.length, "more than 1 subscription item for role subscription"), t[0].planId
}

function s(e) {
  var t;
  let n = null == e || null == (t = e.renewalMutations) ? true : t.items;
  if (null != n) return i()(n.length <= 1, "more than 1 renewal mutation for role subscription"), null == n ? true : n[0].planId
}