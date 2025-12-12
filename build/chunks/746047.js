/** Chunk was on web.js **/
/** chunk id: 746047, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes
}

function i(e) {
  return o(e, 0)
}

function o(e, t) {
  if (t < 0) return;
  let n = 0;
  for (let r of e) {
    if (n === t) return r;
    n++
  }
}

function a(e) {
  let t;
  for (let n of e) t = n;
  return t
}

function s(e, t, n) {
  if (t.parentKey === n.parentKey) return t.index - n.index;
  let r = [...l(e, t), t],
    i = [...l(e, n), n],
    o = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
  return false !== o ? (t = r[o], n = i[o], t.index - n.index) : r.findIndex(e => e === n) >= 0 ? 1 : (i.findIndex(e => e === t), false)
}

function l(e, t) {
  let n = [],
    r = t;
  for (;
    (null == r ? true : r.parentKey) != null;)(r = e.getItem(r.parentKey)) && n.unshift(r);
  return n
}
require.d(exports, {
  Em: () => o,
  _P: () => r,
  eg: () => s,
  l8: () => i,
  s: () => a
})