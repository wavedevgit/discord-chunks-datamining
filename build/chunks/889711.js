/** Chunk was on web.js **/
/** chunk id: 889711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UC: () => u,
  YP: () => c,
  fO: () => d,
  pP: () => l
}), require("./388685.js");
var Chunk731965 = require("./731965.js");
let i = new WeakMap,
  o = new Map,
  a = new WeakMap;

function s(e) {
  return new e.ResizeObserver(e => {
    (0, r.j)(() => {
      for (let t of e) {
        let e = t.target,
          n = i.get(e);
        if (null == n) continue;
        let r = o.get(n);
        null != r && r(t)
      }
    })
  })
}

function l(e, t, n) {
  var r, l;
  i.set(t, e), o.set(e, n);
  let c = null != (l = null == (r = t.ownerDocument) ? true : r.defaultView) ? l : window,
    u = a.get(c);
  return null == u && (u = s(c), a.set(c, u)), u
}

function c(e, t) {
  e.observe(t)
}

function u(e, t) {
  e.unobserve(t)
}

function d(e, t) {
  o.delete(e), null != t && i.delete(t)
}