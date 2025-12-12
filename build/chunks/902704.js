/** Chunk was on web.js **/
/** chunk id: 902704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => a,
  Z: () => i
}), require("./539854.js");
let r = {};

function i(e, t, n) {
  let {
    shouldWarnLargeObjects: i,
    logCallback: a
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r;
  if (e === t) returntrue;
  if (true === e || true === t) return e === t;
  let o = Object.keys(e),
    s = Object.keys(t);
  if (o.length !== s.length) returnfalse;
  let l = [];
  for (let r = 0; r < o.length; r++) {
    let i = o[r];
    if (e[i] !== t[i] && (null == n || !n.includes(i))) returnfalse
  }
  return 0 === l.length
}

function a(e, t) {
  let {
    logCallback: n,
    shouldWarnLargeObjects: i
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r;
  return null != t && e.length === t.length && e.every((e, n) => t[n] === e)
}