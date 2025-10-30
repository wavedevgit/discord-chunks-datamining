/** Chunk was on web.js **/
/** chunk id: 137058, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  let n = e.split(/[/\\]/),
    r = "" !== n[n.length - 1] ? n[n.length - 1] : e;
  return null != t && r.endsWith(t) && (r = r.slice(0, -t.length)), r
}

function i(e) {
  let t = r(e),
    n = t.lastIndexOf(".");
  return n <= 0 ? t : t.slice(0, n)
}
require.d(exports, {
  G6: () => i,
  eP: () => r
}), require("./35282.js"), require("./358085.js")