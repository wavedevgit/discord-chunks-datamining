/** Chunk was on web.js **/
/** chunk id: 206692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $v: () => l,
  e: () => s,
  wB: () => o
}), require("./896048.js");
let r = new WeakMap,
  i = new WeakMap;

function a(e, t) {
  e.forEach(e => {
    var n;
    let r = null == (n = i.get(t)) ? true : n.get(e.target);
    null != r && r.call(null, e)
  })
}

function s(e) {
  let t = r.get(e);
  return null == t && (t = new IntersectionObserver(a, e), r.set(e, t), i.set(t, new WeakMap)), t
}

function o(e, t, n) {
  var r;
  let a = null != (r = i.get(e)) ? r : new WeakMap;
  a.has(t) || e.observe(t), a.set(t, n), i.set(e, a)
}

function l(e, t) {
  var n;
  let r = null != (n = i.get(e)) ? n : new WeakMap;
  r.has(t) && (r.delete(t), e.unobserve(t), i.set(e, r))
}