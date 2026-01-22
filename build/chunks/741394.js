/** Chunk was on web.js **/
/** chunk id: 741394, original params: e,t,n (module,exports,re quire) **/
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
  kh: () => i,
  uk: () => r
}), require("./747238.js"), require("./723702.js")