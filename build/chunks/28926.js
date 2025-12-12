/** Chunk was on web.js **/
/** chunk id: 28926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i,
  r: () => o
}), require("./415506.js");
var Chunk48481 = require("./48481.js");

function i(e, t) {
  let n = e.fields.find(e => e.localName === t);
  if (null == n) throw Error("Unknown proto field name ".concat(String(t)));
  return n.T()
}

function o(e, t, n, i, o) {
  let a = null != e ? n.fromBinary(n.toBinary(e), r.Uc) : n.create();
  if (false === t(a)) return null;
  let s = i.create();
  return s[o] = a, s
}