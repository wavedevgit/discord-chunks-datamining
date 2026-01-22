/** Chunk was on web.js **/
/** chunk id: 860579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $v: () => u,
  JE: () => d,
  NQ: () => l,
  wB: () => c
}), require("./896048.js");
var Chunk121894 = require("./121894.js");
let i = new WeakMap,
  a = new Map,
  s = new WeakMap;

function o(e) {
  return new e.ResizeObserver(e => {
    (0, r.r)(() => {
      for (let t of e) {
        let e = t.target,
          n = i.get(e);
        if (null == n) continue;
        let r = a.get(n);
        null != r && r(t)
      }
    })
  })
}

function l(e, t, n) {
  var r, l;
  i.set(t, e), a.set(e, n);
  let c = null != (r = null == (l = t.ownerDocument) ? true : l.defaultView) ? r : window,
    u = s.get(c);
  return null == u && (u = o(c), s.set(c, u)), u
}

function c(e, t) {
  e.observe(t)
}

function u(e, t) {
  e.unobserve(t)
}

function d(e, t) {
  a.delete(e), null != t && i.delete(t)
}