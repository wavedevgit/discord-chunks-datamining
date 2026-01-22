/** Chunk was on web.js **/
/** chunk id: 159201, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => a,
  f: () => i
}), require("./65821.js");
var Chunk761821 = require("./761821.js");

function i(e, t) {
  let n = e.fields.find(e => e.localName === t);
  if (null == n) throw Error("Unknown proto field name ".concat(String(t)));
  return n.T()
}

function a(e, t, n, i, a) {
  let s = null != e ? n.fromBinary(n.toBinary(e), r.Su) : n.create();
  if (false === t(s)) return null;
  let o = i.create();
  return o[a] = s, o
}